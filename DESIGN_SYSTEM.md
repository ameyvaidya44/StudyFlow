# StudyFlow Design System

## Overview
Modern, clean, and professional UI design inspired by leading SaaS products like Linear, Vercel, and Stripe.

## Color Palette

### Primary Colors
- **Primary**: `#6366f1` (Indigo-500) - Main brand color for buttons and accents
- **Secondary**: `#8b5cf6` (Violet-500) - Secondary accents and gradients
- **Success**: `#10b981` (Emerald-500) - Success states
- **Warning**: `#f59e0b` (Amber-500) - Warning states
- **Danger**: `#ef4444` (Red-500) - Error states

### Neutral Colors
- **Text Primary**: `#111827` (Gray-900) - Main text
- **Text Secondary**: `#6b7280` (Gray-500) - Secondary text
- **Background**: `#f9fafb` (Gray-50) - Page background
- **Border**: `#e5e7eb` (Gray-200) - Borders and dividers

## Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Heading Sizes**: 
  - H1: 3xl-5xl (30-48px)
  - H2: 2xl-4xl (24-36px)
  - H3: xl-2xl (20-24px)
- **Body**: Base (16px)
- **Small**: sm (14px)
- **Tiny**: xs (12px)

## Spacing
- Consistent spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Component padding: 16-24px
- Section padding: 64-96px (py-16 to py-24)
- Gap between elements: 12-24px

## Border Radius
- **Small**: 8px (rounded-lg)
- **Medium**: 12px (rounded-xl)
- **Large**: 16px (rounded-2xl)
- **Extra Large**: 24px (rounded-3xl)

## Shadows
- **Soft**: Subtle shadow for cards at rest
- **Card**: Medium shadow for elevated cards
- **Hover**: Larger shadow on hover states
- **Glow**: Colored ring for focus states

## Components

### Buttons
- **Primary**: Gradient background (primary to secondary), white text
- **Secondary**: White background, border, hover state
- **Ghost**: Transparent, hover background
- **Sizes**: Base padding (px-4 py-2.5), rounded-xl
- **States**: Hover scale, active scale, loading spinner

### Cards
- White background
- Border with hover state
- Rounded-2xl corners
- Soft shadow with hover elevation
- Smooth transitions (200ms)

### Inputs
- Rounded-xl borders
- Focus ring (4px, primary/10 opacity)
- Clear error states with icons
- Placeholder styling

### Navigation
- Backdrop blur effect
- Sticky positioning
- Smooth hover transitions
- Active state indicators

## Animations
- **Duration**: 200-300ms for most transitions
- **Easing**: ease-out for natural feel
- **Hover**: Subtle scale (1.02) and shadow changes
- **Active**: Scale down (0.98) for tactile feedback
- **Page transitions**: Fade in + slide up

## Layout Principles
1. **Generous whitespace** - Don't crowd elements
2. **Clear hierarchy** - Size, weight, and color for importance
3. **Consistent alignment** - Use grid systems
4. **Responsive first** - Mobile to desktop scaling
5. **Accessibility** - Proper contrast ratios and focus states

## Best Practices
- Use gradient backgrounds sparingly for emphasis
- Maintain consistent spacing throughout
- Keep borders subtle (gray-200)
- Use shadows to create depth hierarchy
- Animate state changes for better UX
- Always provide loading and error states
