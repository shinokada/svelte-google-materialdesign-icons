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
    '<path d="M19.75 8c-.69 0-1.25.56-1.25 1.25V15H18c-1.65 0-3 1.35-3 3h-1c0-2.04 1.53-3.72 3.5-3.97V3.25a1.25 1.25 0 0 0-2.5 0V11h-1V1.25a1.25 1.25 0 0 0-2.5 0V11h-1V2.75a1.25 1.25 0 0 0-2.5 0V12H7V5.75a1.25 1.25 0 0 0-2.5 0v10c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75v-6.5C21 8.56 20.44 8 19.75 8z"/>';
  let svgoutlined =
    '<path d="M18.5 8c-.17 0-.34.02-.5.05V4.5a2.5 2.5 0 0 0-3.04-2.44A2.502 2.502 0 0 0 12.5 0c-1.06 0-1.96.66-2.33 1.59A2.5 2.5 0 0 0 7 4v.55A2.5 2.5 0 0 0 4 7v8.5c0 4.69 3.81 8.5 8.5 8.5s8.5-3.81 8.5-8.5v-5A2.5 2.5 0 0 0 18.5 8zm.5 7.5a6.5 6.5 0 1 1-13 0V7c0-.28.22-.5.5-.5s.5.22.5.5v5h2V4c0-.28.22-.5.5-.5s.5.22.5.5v7h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5v8.92c-1.77.77-3 2.53-3 4.58h2c0-1.66 1.34-3 3-3v-4.5c0-.28.22-.5.5-.5s.5.22.5.5v5z"/>';
  let svground =
    '<path d="M18.5 14.5c0 .28-.22.5-.5.5-1.51 0-2.77 1.12-2.97 2.58-.03.24-.25.42-.49.42-.3 0-.54-.27-.5-.57a4.03 4.03 0 0 1 3.46-3.4V3.25a1.25 1.25 0 0 0-2.5 0v7.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V1.25a1.25 1.25 0 0 0-2.5 0v9.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V2.75a1.25 1.25 0 0 0-2.5 0v8.75c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5.75a1.25 1.25 0 0 0-2.5 0v10c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75v-6.5a1.25 1.25 0 0 0-2.5 0v5.25z"/>';
  let svgsharp =
    '<path d="M18.5 8v7H18c-1.65 0-3 1.35-3 3h-1c0-2.04 1.53-3.72 3.5-3.97V2H15v9h-1V0h-2.5v11h-1V1.5H8V12H7V4.5H4.5v11.25c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75V8h-2.5z"/>';
  let svgtwotone =
    '<path d="M19 15.5a6.5 6.5 0 1 1-13 0V7c0-.28.22-.5.5-.5s.5.22.5.5v5h2V4c0-.28.22-.5.5-.5s.5.22.5.5v7h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5v8.92c-1.77.77-3 2.53-3 4.58h2c0-1.66 1.34-3 3-3v-4.5c0-.28.22-.5.5-.5s.5.22.5.5v5z" opacity=".3"/><path d="M18.5 8c-.17 0-.34.02-.5.05V4.5a2.5 2.5 0 0 0-3.04-2.44A2.502 2.502 0 0 0 12.5 0c-1.06 0-1.96.66-2.33 1.59A2.5 2.5 0 0 0 7 4v.55A2.5 2.5 0 0 0 4 7v8.5c0 4.69 3.81 8.5 8.5 8.5s8.5-3.81 8.5-8.5v-5A2.5 2.5 0 0 0 18.5 8zm.5 7.5a6.5 6.5 0 1 1-13 0V7c0-.28.22-.5.5-.5s.5.22.5.5v5h2V4c0-.28.22-.5.5-.5s.5.22.5.5v7h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5v8.92c-1.77.77-3 2.53-3 4.58h2c0-1.66 1.34-3 3-3v-4.5c0-.28.22-.5.5-.5s.5.22.5.5v5z"/>';
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
  export let ariaLabel = 'front hand';
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
@prop export let ariaLabel = 'front hand';
-->
