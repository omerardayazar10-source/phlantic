"""One-shot: crop whitespace + sample dominant brand colors from the logo."""
from PIL import Image
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "phlantic-logo.png"

im = Image.open(SRC).convert("RGBA")
w, h = im.size
px = im.load()

# Find bounding box of non-white pixels (treat near-white as background).
def is_bg(r, g, b, a):
    return a < 8 or (r > 240 and g > 240 and b > 240)

xmin, ymin, xmax, ymax = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if not is_bg(r, g, b, a):
            if x < xmin: xmin = x
            if y < ymin: ymin = y
            if x > xmax: xmax = x
            if y > ymax: ymax = y

print(f"bbox: ({xmin},{ymin}) -> ({xmax},{ymax})  size: {xmax-xmin}x{ymax-ymin}")

# Crop with a small padding so the mark is not flush against edges.
pad = 12
box_full = (max(0, xmin - pad), max(0, ymin - pad), min(w, xmax + pad), min(h, ymax + pad))
cropped = im.crop(box_full)
cropped.save(ROOT / "public" / "phlantic-wordmark.png", optimize=True)
print(f"wrote phlantic-wordmark.png  size={cropped.size}")

# Also crop just the icon (left third where the P-mark sits).
icon_right = xmin + int((xmax - xmin) * 0.28)
icon_box = (max(0, xmin - pad), max(0, ymin - pad), icon_right, min(h, ymax + pad))
icon = im.crop(icon_box)
icon.save(ROOT / "public" / "phlantic-icon.png", optimize=True)
print(f"wrote phlantic-icon.png  size={icon.size}")

# Sample dominant colors (excluding background and near-black wordmark).
buckets: Counter = Counter()
for y in range(ymin, ymax + 1, 3):
    for x in range(xmin, xmax + 1, 3):
        r, g, b, a = px[x, y]
        if is_bg(r, g, b, a):
            continue
        # ignore near-black wordmark
        if r < 50 and g < 50 and b < 50:
            continue
        # quantize to 16-step buckets
        key = (r // 16 * 16, g // 16 * 16, b // 16 * 16)
        buckets[key] += 1

print("\ntop 10 chromatic buckets:")
for color, count in buckets.most_common(10):
    r, g, b = color
    print(f"  #{r:02x}{g:02x}{b:02x}  rgb({r:>3},{g:>3},{b:>3})  ×{count}")
