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
    '<path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 0 0-1-12.68l-1.42 1.42A6.993 6.993 0 0 1 19 13zm-3-8-4-4v3a9 9 0 0 0-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 0 1 5 13c0-3.86 3.14-7 7-7v3l4-4z"/>';
  let svgoutlined =
    '<path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 0 0-1-12.68l-1.42 1.42A6.993 6.993 0 0 1 19 13zm-3-8-4-4v3a9 9 0 0 0-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 0 1 5 13c0-3.86 3.14-7 7-7v3l4-4z"/>';
  let svground =
    '<path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2v.5c0 .55.45 1 1 1s1-.45 1-1v-.5zm6-6.5c0 1.39-.41 2.69-1.12 3.78a1 1 0 0 0 .14 1.24c.44.44 1.2.38 1.54-.15A8.9 8.9 0 0 0 21 13c0-2.36-.91-4.51-2.4-6.12-.39-.42-1.05-.43-1.45-.03-.38.38-.38.99-.02 1.39A6.97 6.97 0 0 1 19 13zm-3.35-8.35-2.79-2.79a.501.501 0 0 0-.86.35V4a9 9 0 0 0-7.56 13.88c.34.53 1.1.59 1.54.15.33-.33.39-.84.14-1.23-1.39-2.15-1.64-5.1.13-8C7.45 6.85 9.71 5.81 12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"/>';
  let svgsharp =
    '<path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 0 0-1-12.68l-1.42 1.42A6.993 6.993 0 0 1 19 13zm-3-8-4-4v3a9 9 0 0 0-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 0 1 5 13c0-3.86 3.14-7 7-7v3l4-4z"/>';
  let svgtwotone =
    '<path d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 0 0-1-12.68l-1.42 1.42A6.993 6.993 0 0 1 19 13zm-3-8-4-4v3a9 9 0 0 0-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 0 1 5 13c0-3.86 3.14-7 7-7v3l4-4z"/>';
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
  export let ariaLabel = 'model training';
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
[Go to docs](https://svelte-google-materialdesign-icons.vercel.app)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'model training';
-->
