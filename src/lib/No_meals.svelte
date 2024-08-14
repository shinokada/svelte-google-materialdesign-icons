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

  export let ariaLabel = 'no meals';
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
      d="M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM6.17 9 5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z"
    />
  {:else if variation === 'filled'}
    <path
      d="M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM6.17 9 5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z"
    />
  {:else if variation === 'round'}
    <path
      d="m21 18.17-2-2V14h-1c-1.1 0-2-.9-2-2V6c0-1.49 1.6-3.32 3.76-3.85.63-.15 1.24.33 1.24.98v15.04zm.19 4.44a.996.996 0 0 1-1.41 0l-9.76-9.76c-.33.09-.66.15-1.02.15v8c0 .55-.45 1-1 1s-1-.45-1-1v-8c-2.21 0-4-1.79-4-4V5.83L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42zM6.17 9 5 7.83V9h1.17zM13 9V3c0-.55-.45-1-1-1s-1 .45-1 1v5.17l1.85 1.85c.09-.33.15-.66.15-1.02zM9 3c0-.55-.45-1-1-1s-1 .45-1 1v1.17l2 2V3z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM6.17 9 5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z"
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
@prop export let ariaLabel = 'no meals';
-->
