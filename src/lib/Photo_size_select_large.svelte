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

  export let ariaLabel = 'photo size select large';
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
      d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"
    />
  {:else if variation === 'filled'}
    <path
      d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"
    />
  {:else if variation === 'round'}
    <path
      d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12v-8c0-1.1-.9-2-2-2H1zm2.63 7.19 1.49-1.91a.5.5 0 0 1 .78-.01l1.39 1.67 2.1-2.7c.2-.26.6-.26.79.01l2.22 2.96a.5.5 0 0 1-.4.8H4.02c-.41-.01-.65-.49-.39-.82z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M21 15h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2v-2zm-8-8h2v2h-2V3zm8 4h2v2h-2V7zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3H1v2h2V3zm20 0h-2v2h2V3zM9 3h2v2H9V3zM5 3h2v2H5V3zm-4 8v10h14V11H1zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M17 19h2v2h-2zM1 19c0 1.1.9 2 2 2h12V11H1v8zm4.5-3.21 1.79 2.15 2.5-3.22L13 19H3l2.5-3.21zM17 3h2v2h-2zm4 8h2v2h-2zm0 4h2v2h-2zM3 3C2 3 1 4 1 5h2V3zm18 4h2v2h-2zm-8-4h2v2h-2zm8 18c1 0 2-1 2-2h-2v2zM1 7h2v2H1zm8-4h2v2H9zM5 3h2v2H5zm16 0v2h2c0-1-1-2-2-2z"
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
@prop export let ariaLabel = 'photo size select large';
-->
