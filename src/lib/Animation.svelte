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

  export let ariaLabel = 'animation';
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
      d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 0 0-3 3A7.014 7.014 0 0 0 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 0 0 3-3A7.014 7.014 0 0 0 22 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7z"
    />
  {:else if variation === 'filled'}
    <path
      d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 0 0-3 3A7.014 7.014 0 0 0 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 0 0 3-3A7.014 7.014 0 0 0 22 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7z"
    />
  {:else if variation === 'round'}
    <path
      d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 0 0-3 3A7.014 7.014 0 0 0 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 0 0 3-3A7.014 7.014 0 0 0 22 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 0 0-3 3A7.014 7.014 0 0 0 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 0 0 3-3A7.014 7.014 0 0 0 22 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7z"
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
@prop export let ariaLabel = 'animation';
-->
