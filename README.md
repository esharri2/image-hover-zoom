# `image-hover-zoom`

A web component for zooming an image on hover

**[Demo](https://esharri2.github.io/image-hover-zoom/demo.html)**

## Example

General usage example:

```html
<script type="module" src="image-hover-zoom.js"></script>

<image-hover-zoom>
  <img
    alt="A black puppy looking up from the ground."
    src="https://picsum.photos/id/237/800/800"
    height="400"
    width="400"
  />
</image-hover-zoom>
```

## Features

This web component allows you to:

- Make any image "zoom" on hover, touch, or focus.
- Allow users to change zoomed area using a mouse, keyboard arrows, or touch
  gestures.
- Easily customize the zoomed image source, the amount of zoom,

## Attributes

| Name         | Attribute           | Purpose                                                                           | Default                                                                  | Optional |
| ------------ | ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------- |
| Key distance | `data-key-distance` | Controls how much the zoomed area moves on each arrow key stroke                  | 30                                                                       | Yes      |
| Label        | `data-label`        | Provides an `aria-label` on the custom element (since the element can gain focus) | Use your mouse, touch, or arrow keys to zoom in on an area of the image. | Yes      |
| Scale        | `data-scale`        | Controls how much the image is zoomed                                             | 2                                                                        | Yes      |
| Src          | `data-src`          | Controls what image src loads when the image is zoomed                            | Whatever `currentSrc` was at time of zoom                                | Yes      |

## Credit
