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
    '<path d="m19 18 2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/>';
  let svgoutlined =
    '<path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/>';
  let svground =
    '<path d="m19 18 2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/>';
  let svgsharp = '<path d="m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"/>';
  let svgtwotone =
    '<path d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"/><path d="m5 19.97 5-2.15 5 2.15V7H5z" opacity=".3"/>';
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
  export let ariaLabel = 'bookmarks';
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
@prop export let ariaLabel = 'bookmarks';
-->
