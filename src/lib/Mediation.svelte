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

  export let ariaLabel = 'mediation';
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
      d="m18 16 4-4-4-4v3h-5.06A8.974 8.974 0 0 0 8 3.95 3.005 3.005 0 0 0 5 1C3.34 1 2 2.34 2 4s1.34 3 3 3c.95 0 1.78-.45 2.33-1.14C9.23 6.9 10.6 8.77 10.92 11h-3.1C7.4 9.84 6.3 9 5 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h3.1c-.32 2.23-1.69 4.1-3.58 5.14C6.78 17.45 5.95 17 5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.99-2.95A8.974 8.974 0 0 0 12.93 13H18v3z"
    />
  {:else if variation === 'filled'}
    <path
      d="m22 12-4 4-1.41-1.41L18.17 13h-5.23A8.974 8.974 0 0 1 8 20.05 3.005 3.005 0 0 1 5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3c.95 0 1.78.45 2.33 1.14A6.969 6.969 0 0 0 10.91 13h-3.1C7.4 14.16 6.3 15 5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14C6.78 6.55 5.95 7 5 7 3.34 7 2 5.66 2 4s1.34-3 3-3a2.99 2.99 0 0 1 2.99 2.95A8.974 8.974 0 0 1 12.93 11h5.23l-1.58-1.59L18 8l4 4z"
    />
  {:else if variation === 'round'}
    <path
      d="M18 13h-5.06A8.974 8.974 0 0 1 8 20.05a3.003 3.003 0 0 1-3.55 2.9c-1.2-.21-2.19-1.2-2.4-2.4A2.998 2.998 0 0 1 5 17c.95 0 1.78.45 2.33 1.14A6.969 6.969 0 0 0 10.91 13h-3.1a2.996 2.996 0 0 1-3.42 1.94c-1.18-.23-2.13-1.2-2.35-2.38A3.013 3.013 0 0 1 5 9c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14-.64.8-1.67 1.28-2.81 1.1-1.23-.19-2.26-1.19-2.47-2.42A3.005 3.005 0 0 1 5 1a2.99 2.99 0 0 1 2.99 2.95A8.974 8.974 0 0 1 12.93 11H18V9.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V13z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M18 13h-5.06A8.974 8.974 0 0 1 8 20.05 3.005 3.005 0 0 1 5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3c.95 0 1.78.45 2.33 1.14A6.969 6.969 0 0 0 10.91 13h-3.1C7.4 14.16 6.3 15 5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14C6.78 6.55 5.95 7 5 7 3.34 7 2 5.66 2 4s1.34-3 3-3a2.99 2.99 0 0 1 2.99 2.95A8.974 8.974 0 0 1 12.93 11H18V8l4 4-4 4v-3z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m18 16 4-4-4-4v3h-5.06A8.974 8.974 0 0 0 8 3.95 3.005 3.005 0 0 0 5 1C3.34 1 2 2.34 2 4s1.34 3 3 3c.95 0 1.78-.45 2.33-1.14C9.23 6.9 10.6 8.77 10.92 11h-3.1C7.4 9.84 6.3 9 5 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h3.1c-.32 2.23-1.69 4.1-3.58 5.14C6.78 17.45 5.95 17 5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.99-2.95A8.974 8.974 0 0 0 12.93 13H18v3z"
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
@prop export let ariaLabel = 'mediation';
-->
