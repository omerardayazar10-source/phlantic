---
name: Phlantic Kinetic Minimalism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#5d3f3d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#926f6c'
  outline-variant: '#e6bdba'
  surface-tint: '#bf0021'
  primary: '#bb0020'
  on-primary: '#ffffff'
  primary-container: '#e41e31'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3af'
  secondary: '#006a64'
  on-secondary: '#ffffff'
  secondary-container: '#7ff3e8'
  on-secondary-container: '#006f69'
  tertiary: '#894d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ad6200'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3af'
  on-primary-fixed: '#410005'
  on-primary-fixed-variant: '#930017'
  secondary-fixed: '#82f5eb'
  secondary-fixed-dim: '#64d9cf'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504b'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb875'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style

The design system for Phlantic is built on the principles of **Kinetic Minimalism**. It balances the clinical precision required of an AI agency with a vibrant, high-energy personality that suggests movement and rapid innovation. The aesthetic is anchored by a stark white canvas and bold, heavy typography, creating an environment of clarity and authority.

This style evokes a sense of "sophisticated energy." It avoids the cold, dark-mode clichés of typical AI startups, opting instead for an open, accessible, and professional light-themed interface. The emotional response is intended to be one of trust and excitement—positioning Phlantic as a transparent partner that brings color and clarity to complex technical challenges.

## Colors

The palette is driven by a high-contrast relationship between a pure white background and deep black ink. 

- **Primary Action:** The Red (#EE2737) serves as the main call-to-action color, providing a sense of urgency and importance.
- **Accents:** Teal (#39B5AC) and Orange (#F7931E) are used strategically for data visualization, category tagging, and illustrative highlights to maintain a dynamic visual rhythm.
- **Neutrals:** Typography is strictly black (#000000) or high-contrast grey for secondary information. Surface colors are kept to a minimum, using only the lightest greys to define container boundaries without adding visual weight.

## Typography

Typography is the primary vehicle for the brand's personality. We use **Plus Jakarta Sans** for headings to provide a modern, slightly geometric feel with high impact. Headlines should be set with tight letter spacing to appear as solid blocks of text.

For body text and functional UI, **Inter** provides exceptional legibility and a systematic, professional tone. Hierarchy is established through significant size stepping and the frequent use of bold weights even within body copy to draw attention to key insights.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop, centered on a 1280px container with a 12-column structure. Spacing is intentionally generous to promote a "premium" feel and reduce cognitive load. 

A strict 8px base unit (linear scale) governs all padding and margins. Vertical rhythm is established through large section gaps (120px+), allowing each content block to "breathe" and stand as its own statement.

## Elevation & Depth

Depth in this design system is achieved through **Subtle Ambient Shadows** rather than heavy borders or gradients. 

Surfaces should appear to sit just above the background. Use a consistent shadow style: a soft, highly diffused drop shadow with low opacity (4-8%) to create a "lifted" effect. This is particularly important for cards and floating navigation bars. Containers should generally have a white background, using shadows to define their edges against the white canvas, creating a "white-on-white" layered aesthetic.

## Shapes

The shape language is consistently **Rounded**, balancing the "sharp" nature of the typography. Standard UI elements like buttons and input fields utilize a 0.5rem (8px) radius. Larger containers, such as feature cards or image wrappers, scale up to 1rem (16px) or 1.5rem (24px) to emphasize their role as structural anchors in the layout.

## Components

### Buttons
Primary buttons use the brand Red (#EE2737) with white text. They should have generous horizontal padding and a bold weight. Secondary buttons use a light grey background or a subtle 1px border.

### Cards
Cards are the primary container for information. They feature a white background, a soft shadow (no border), and internal padding of at least 32px. 

### Chips & Tags
Used for categorization, chips should use the accent Teal and Orange colors with 10% opacity backgrounds and 100% opacity text for high legibility and a "tinted" look.

### Input Fields
Inputs are clean with a subtle light-grey border that thickens or changes to the Primary Red upon focus. Labels should be small, bold, and placed above the field.

### Lists & Feature Blocks
Use icons from the brand's accent palette (Teal/Orange) to provide visual anchors for list items. Icons should be simplified and geometric.