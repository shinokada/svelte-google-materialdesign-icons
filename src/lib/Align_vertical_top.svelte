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
  let svgfilled = '<path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>';
  let svgoutlined = '<path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>';
  let svground =
    '<path d="M22 3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1zM8.5 22c.83 0 1.5-.67 1.5-1.5v-13C10 6.67 9.33 6 8.5 6S7 6.67 7 7.5v13c0 .83.67 1.5 1.5 1.5zm7-6c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5v7c0 .83.67 1.5 1.5 1.5z"/>';
  let svgsharp = '<path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>';
  let svgtwotone = '<path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>';
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
  export let ariaLabel = 'align vertical top';
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
@prop export let ariaLabel = 'align vertical top';
-->
