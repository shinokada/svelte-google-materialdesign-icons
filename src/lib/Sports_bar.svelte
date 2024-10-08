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

  export let ariaLabel = 'sports bar';
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
      d="M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2v10zM10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13A4.707 4.707 0 0 0 10 2.02zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM17 17v-6h2v6h-2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M19 9h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13A4.707 4.707 0 0 0 10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM19 17h-2v-6h2v6z"
    />
  {:else if variation === 'round'}
    <path
      d="M19 9h-1.56c.33-.55.53-1.18.55-1.86.04-1.03-.43-1.99-1.16-2.71-1.54-1.54-2.74-1.56-3.82-1.29A4.615 4.615 0 0 0 10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V19c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM19 17h-2v-6h2v6z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M21 9h-3.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13A4.707 4.707 0 0 0 10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h4V9zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM19 17h-2v-6h2v6z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2v10zm-8-8.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5z"
      opacity=".3"
    /><path
      d="M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2v10zM10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13A4.707 4.707 0 0 0 10 2.02zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM17 17v-6h2v6h-2z"
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
@prop export let ariaLabel = 'sports bar';
-->
