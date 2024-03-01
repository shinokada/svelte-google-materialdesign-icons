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
    '<path d="M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2h6zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6h6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2h-6z"/>';
  let svgoutlined =
    '<path d="M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2h6zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6h6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2h-6z"/>';
  let svground =
    '<path d="M3 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.59L4.62 3.21a.996.996 0 1 0-1.41 1.41L5.59 7H4c-.55 0-1 .45-1 1zm17-1h-1.59l2.38-2.38a.996.996 0 1 0-1.41-1.41L17 5.59V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM4 17h1.59l-2.38 2.38a.996.996 0 1 0 1.41 1.41L7 18.41V20c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm17-1c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.38 2.38a.996.996 0 1 0 1.41-1.41L18.41 17H20c.55 0 1-.45 1-1z"/>';
  let svgsharp =
    '<path d="M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2h6zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6h6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2h-6z"/>';
  let svgtwotone =
    '<path d="M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2h6zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6h6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2h-6z"/>';
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
  export let ariaLabel = 'zoom in map';
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
@prop export let ariaLabel = 'zoom in map';
-->
