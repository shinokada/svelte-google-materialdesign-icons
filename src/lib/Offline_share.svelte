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
    '<path d="M14.6 10.26v1.31L17 9.33 14.6 7.1v1.28c-2.33.32-3.26 1.92-3.6 3.52.83-1.13 1.93-1.64 3.6-1.64zM16 23H6c-1.1 0-2-.9-2-2V5h2v16h10v2zm2-22h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 15h-8V4h8v12z"/>';
  let svgoutlined =
    '<path d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6V5z"/><path d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z"/><path d="M12.5 10.25h1.63l-.69.69L14.5 12 17 9.5 14.5 7l-1.06 1.06.69.69H12c-.55 0-1 .45-1 1V12h1.5v-1.75z"/>';
  let svground =
    '<path d="M5 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h9c.55 0 1-.45 1-1s-.45-1-1-1H6V6c0-.55-.45-1-1-1z"/><path d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 14h-8V5h8v10z"/><path d="M12.5 10.25h2v.54c0 .45.54.67.85.35l1.29-1.29c.2-.2.2-.51 0-.71l-1.29-1.29a.5.5 0 0 0-.85.35v.54H12c-.55 0-1 .45-1 1v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-.99z"/>';
  let svgsharp =
    '<path d="M6 5H4v18h12v-2H6z"/><path d="M20 1H8v18h12V1zm-2 14h-8V5h8v10z"/><path d="M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z"/>';
  let svgtwotone =
    '<path d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6V5z"/><path d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z"/><path d="M12.5 10.25h2V12L17 9.5 14.5 7v1.75H12c-.55 0-1 .45-1 1V12h1.5v-1.75z"/>';
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
  export let ariaLabel = 'offline share';
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
@prop export let ariaLabel = 'offline share';
-->
