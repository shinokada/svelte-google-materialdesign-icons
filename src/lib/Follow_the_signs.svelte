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

  export let ariaLabel = 'follow the signs';
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
  {#if variation === 'outlined'}
    <path
      d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75M13 2v7h3.75v14h1.5V9H22V2h-9zm5.01 6V6.25H14.5v-1.5h3.51V3l2.49 2.5L18.01 8z"
    />
  {:else if variation === 'filled'}
    <path
      d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75M13 2v7h3.75v14h1.5V9H22V2h-9zm5.01 6V6.25H14.5v-1.5h3.51V3l2.49 2.5L18.01 8z"
    />
  {:else if variation === 'round'}
    <path
      d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3.23 21.81c-.12.62.35 1.19.98 1.19h.09c.47 0 .88-.33.98-.79L6.85 15 9 17v5c0 .55.45 1 1 1s1-.45 1-1v-6.14c0-.27-.11-.52-.29-.71L8.95 13.4l.6-3a6.967 6.967 0 0 0 4.31 2.51c.6.1 1.14-.39 1.14-1 0-.49-.36-.9-.84-.98a5.14 5.14 0 0 1-3.51-2.38l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15l-4.63 1.9c-.37.15-.62.52-.62.92V12c0 .55.45 1 1 1s1-.45 1-1V9.65l1.75-.75M21 2h-7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2.75v13.25c0 .41.34.75.75.75s.75-.34.75-.75V9H21c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-.85 3.85-1.28 1.29c-.31.32-.85.09-.85-.35v-.54h-2.76c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.76v-.54c0-.45.54-.67.85-.35l1.28 1.29c.19.19.19.51 0 .7z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75M13 2v7h3.75v14h1.5V9H22V2h-9zm5.01 6V6.25H14.5v-1.5h3.51V3l2.49 2.5L18.01 8z"
    />
  {:else if variation === 'two-tone'}
    replace_svg_two
  {/if}
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
@prop export let ariaLabel = 'follow the signs';
-->
