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

  export let ariaLabel = 'cable';
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
      d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5h-1z"
    />
  {:else if variation === 'filled'}
    <path
      d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5h-1z"
    />
  {:else if variation === 'round'}
    <path
      d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v6.91c0 1.04-.76 1.98-1.79 2.08-1.2.12-2.21-.82-2.21-1.99V7.14c0-2.13-1.61-3.99-3.74-4.13A3.993 3.993 0 0 0 5 7v7H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7V7.09c0-1.04.76-1.98 1.79-2.08C9.99 4.89 11 5.83 11 7v9.86c0 2.13 1.61 3.99 3.74 4.13C17.07 21.14 19 19.3 19 17v-7h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
    />
  {:else if variation === 'sharp'}
    <path d="M20 5V3h-4v2h-1v5h2v9h-4V3H5v11H3v5h1v2h4v-2h1v-5H7V5h4v16h8V10h2V5h-1z" />
  {:else if variation === 'two-tone'}
    <path
      d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5h-1z"
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
@prop export let ariaLabel = 'cable';
-->
