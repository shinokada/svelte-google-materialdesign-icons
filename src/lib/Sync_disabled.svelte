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

  export let ariaLabel = 'sync disabled';
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
      d="M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5A7.921 7.921 0 0 0 20 12zM4.27 4 2.86 5.41l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41L4.27 4z"
    />
  {:else if variation === 'filled'}
    <path
      d="M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94 2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46a7.925 7.925 0 0 0-1.14-9.87L20 4z"
    />
  {:else if variation === 'round'}
    <path
      d="M10 5.74v-.19c0-.68-.71-1.11-1.32-.82-.19.09-.36.2-.54.3L9.6 6.49c.24-.18.4-.45.4-.75zM20 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51a.5.5 0 0 0-.36-.85H14v4.79c0 .45.54.67.85.35l1.39-1.39C17.32 8.85 18 10.34 18 12c0 .85-.18 1.66-.5 2.39l1.48 1.48A7.92 7.92 0 0 0 20 12zM3.57 4.7a.996.996 0 0 0 0 1.41l1.65 1.65A7.986 7.986 0 0 0 4 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51a.5.5 0 0 0 .36.85H9.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C6.68 15.15 6 13.66 6 12c0-1 .26-1.93.69-2.76l8.07 8.07c-.01.02-.01.02-.01.04-.43.12-.75.48-.75.91v.18c0 .68.71 1.11 1.32.82.31-.14.61-.31.9-.49l1.87 1.87a.996.996 0 1 0 1.41-1.41L4.98 4.7a.996.996 0 0 0-1.41 0z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5A7.921 7.921 0 0 0 20 12zM4.27 4 2.86 5.41l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41L4.27 4z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16zM20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5A7.921 7.921 0 0 0 20 12zM4.27 4 2.86 5.41l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41L4.27 4z"
    />
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
@prop export let ariaLabel = 'sync disabled';
-->
