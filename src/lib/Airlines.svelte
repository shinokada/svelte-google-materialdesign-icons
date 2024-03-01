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
  let svgfilled = '<path d="M13 4 2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>';
  let svgoutlined =
    '<path d="M17.34 18H5.8l8.25-12h5.54l-2.25 12zM13 4 2 20h17l3-16h-9zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z"/>';
  let svground =
    '<path d="M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4zM14.5 14a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>';
  let svgsharp = '<path d="M13 4 2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>';
  let svgtwotone =
    '<path d="M14.05 6 5.8 18h11.54l2.25-12h-5.54zm.45 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" opacity=".3"/><path d="M17.34 18H5.8l8.25-12h5.54l-2.25 12zM13 4 2 20h17l3-16h-9zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z"/>';
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
  export let ariaLabel = 'airlines';
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
@prop export let ariaLabel = 'airlines';
-->
