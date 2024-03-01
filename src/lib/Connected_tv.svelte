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
    '<path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM4 14v2h2c0-1.11-.89-2-2-2zm0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H9c0-2.76-2.24-5-5-5zm0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H12c0-4.42-3.59-8-8-8z"/>';
  let svgoutlined =
    '<path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM5 14v2h2c0-1.11-.89-2-2-2zm0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5zm0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8z"/>';
  let svground =
    '<path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM7 15.97A2.007 2.007 0 0 0 5.03 14H5v2h2v-.03zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84.06.36.37.61.73.61.46 0 .82-.41.75-.86a4.998 4.998 0 0 0-4.06-4.06.746.746 0 0 0-.87.74c0 .37.26.67.62.73zm.02-3.02c3.07.3 5.52 2.75 5.83 5.82.04.37.37.65.74.65.45 0 .79-.4.75-.85a8.001 8.001 0 0 0-7.11-7.1.756.756 0 0 0-.85.74c0 .37.27.71.64.74z"/>';
  let svgsharp =
    '<path d="M8.57 16H10c0-2.76-2.24-5-5-5v1.43c1.97 0 3.57 1.6 3.57 3.57z"/><path d="M11.55 16H13c0-4.42-3.59-8-8-8v1.45c3.61 0 6.55 2.93 6.55 6.55zM5 14v2h2c0-1.11-.89-2-2-2z"/><path d="M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z"/>';
  let svgtwotone =
    '<path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM5 14v2h2c0-1.11-.89-2-2-2zm0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5zm0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8z"/><path d="M4 5h16v12H4z" opacity=".3"/>';
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
  export let ariaLabel = 'connected tv';
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
@prop export let ariaLabel = 'connected tv';
-->
