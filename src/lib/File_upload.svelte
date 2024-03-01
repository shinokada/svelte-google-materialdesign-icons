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
  let svgfilled = '<path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>';
  let svgoutlined =
    '<path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"/>';
  let svground =
    '<path d="M7.4 10h1.59v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.7 3.7a.996.996 0 0 0-1.41 0L6.7 8.29c-.63.63-.19 1.71.7 1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/>';
  let svgsharp = '<path d="M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z"/>';
  let svgtwotone =
    '<path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity=".3"/><path d="M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2V8H9.83L12 5.83 14.17 8H13z"/>';
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
  export let ariaLabel = 'file upload';
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
@prop export let ariaLabel = 'file upload';
-->
