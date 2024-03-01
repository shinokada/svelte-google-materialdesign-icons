<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';

  let svgpath: string;
  let svgfilled =
    '<path d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.262 8.262 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/>';
  let svgoutlined =
    '<path d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.262 8.262 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/>';
  let svground =
    '<path d="M15 18.5A6.48 6.48 0 0 1 9.24 15h5.14c.38 0 .73-.21.89-.55.33-.66-.15-1.45-.89-1.45h-5.8c-.05-.33-.08-.66-.08-1s.03-.67.08-1h5.8c.38 0 .73-.21.89-.55A.994.994 0 0 0 14.38 9H9.24A6.491 6.491 0 0 1 15 5.5c1.25 0 2.42.36 3.42.97.5.31 1.15.26 1.57-.16.58-.58.45-1.53-.25-1.96A9.034 9.034 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6h-2.9c-.38 0-.73.21-.9.55-.33.67.15 1.45.9 1.45h2.44a8.262 8.262 0 0 0 0 2H3.62c-.38 0-.73.21-.89.55-.34.67.14 1.45.89 1.45h2.9c1.24 3.49 4.56 6 8.48 6 1.74 0 3.36-.49 4.74-1.35.69-.43.82-1.39.24-1.97-.42-.42-1.07-.47-1.57-.15-.99.62-2.15.97-3.41.97z"/>';
  let svgsharp =
    '<path d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.262 8.262 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/>';
  let svgtwotone =
    '<path d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.262 8.262 0 0 0 0 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"/>';
  switch (variation) {
    case 'filled':
      svgpath = svgfilled;
      break;
    case 'outlined':
      svgpath = svgoutlined;
      break;
    case 'round':
      svgpath = svground;
      break;
    case 'sharp':
      svgpath = svgsharp;
      break;
    case 'two-tone':
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
  export let ariaLabel = 'euro';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://svelte-google-materialdesign-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'euro';
-->
