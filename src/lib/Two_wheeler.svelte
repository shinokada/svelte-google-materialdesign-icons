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
    '<path d="M20 11c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5H9v2h3.59l2 2H11l-4 2-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4l2 2h3l3.49-6.1 1.01 1.01c-.91.73-1.5 1.84-1.5 3.09 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>';
  let svgoutlined =
    '<path d="M4.17 11H4h.17m9.24-6H9v2h3.59l2 2H11l-4 2-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4l2 2h3l3.49-6.1 1.01 1.01c-.91.73-1.5 1.84-1.5 3.09 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5zM20 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>';
  let svground =
    '<path d="M20 11c-.18 0-.36.03-.53.05L17.41 9H19c.55 0 1-.45 1-1v-.38c0-.74-.78-1.23-1.45-.89l-2.28 1.14L13.7 5.3A.976.976 0 0 0 13 5h-3c-.55 0-1 .45-1 1s.45 1 1 1h2.17c.27 0 .52.11.71.29L14.59 9h-3.35c-.16 0-.31.04-.45.11l-3.14 1.57a.99.99 0 0 1-1.15-.19l-1.2-1.2C5.11 9.11 4.85 9 4.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h3a4 4 0 0 0-3.89 4.94 3.96 3.96 0 0 0 2.95 2.95A4 4 0 0 0 8 15l1.41 1.41c.38.38.89.59 1.42.59h1.01c.72 0 1.38-.38 1.74-1.01l2.91-5.09 1.01 1.01a3.974 3.974 0 0 0-1.38 4.05c.34 1.44 1.51 2.61 2.95 2.94A4.01 4.01 0 0 0 24 15c0-2.21-1.79-4-4-4zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>';
  let svgsharp =
    '<path d="M4.17 11H4h.17m9.24-6H9v2h3.59l2 2H11l-4 2-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4l2 2h3l3.49-6.1 1.01 1.01c-.91.73-1.5 1.84-1.5 3.09 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5zM20 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>';
  let svgtwotone =
    '<path d="M4.17 11H4h.17m9.24-6H9v2h3.59l2 2H11l-4 2-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4l2 2h3l3.49-6.1 1.01 1.01c-.91.73-1.5 1.84-1.5 3.09 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5zM20 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>';
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
  export let ariaLabel = 'two wheeler';
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
@prop export let ariaLabel = 'two wheeler';
-->
