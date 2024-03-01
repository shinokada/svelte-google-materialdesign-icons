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
    '<path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"/>';
  let svgoutlined =
    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 2h6v6h-3l1-4-4 1V5zM5 5h6v3L7 7l1 4H5V5zm6 14H5v-6h3l-1 4 4-1v3zm8 0h-6v-3l4 1-1-4h3v6zm-4.37-4.37L12 13.72l-2.63.91.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63z"/>';
  let svground =
    '<path d="M3 5v6h5l-.6-2.38c-.18-.74.48-1.4 1.22-1.22L11 8V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-2.38.6c-.73.18-1.4-.48-1.21-1.21L8 13zm7.38 3.6L13 16v5h6c1.1 0 2-.9 2-2v-6h-5l.6 2.38c.18.74-.48 1.4-1.22 1.22zM19 3h-6v5l2.38-.6c.73-.18 1.4.48 1.21 1.21L16 11h5V5c0-1.1-.9-2-2-2z"/>';
  let svgsharp =
    '<path d="M3 3v8h5L7 7l4 1V3H3zm5 10H3v8h8v-5l-4 1 1-4zm9 4-4-1v5h8v-8h-5l1 4zm4-14h-8v5l4-1-1 4h5V3z"/>';
  let svgtwotone =
    '<path d="m7 7 4 1V5H5v6h3zm1 6H5v6h6v-3l-4 1zm9 4-4-1v3h6v-6h-3zm-4-9 4-1-1 4h3V5h-6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h6v3L7 7l1 4H5V5zm6 14H5v-6h3l-1 4 4-1v3zm-1.63-4.37.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63-2.63-.91-2.63.91zM19 19h-6v-3l4 1-1-4h3v6zm0-8h-3l1-4-4 1V5h6v6z"/>';
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
  export let ariaLabel = 'pages';
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
@prop export let ariaLabel = 'pages';
-->
