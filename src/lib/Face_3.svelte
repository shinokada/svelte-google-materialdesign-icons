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

  export let ariaLabel = 'face 3';
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
    <circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" /><path
      d="M22.91 11.96C22.39 6.32 17.66 2 12 2S1.61 6.32 1.09 11.96l-.9 9.86c-.1 1.17.82 2.18 2 2.18h19.62c1.18 0 2.1-1.01 1.99-2.18l-.89-9.86zM13 4.07c2.26.28 4.22 1.51 5.49 3.28-.58.4-1.26.65-1.99.65C14.57 8 13 6.43 13 4.5v-.43zm-2 0v.43C11 6.43 9.43 8 7.5 8c-.73 0-1.41-.25-1.99-.65 1.27-1.77 3.23-3 5.49-3.28zM4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87zM12 22H2.19l.56-6.2C4.25 19.44 7.82 22 12 22s7.75-2.56 9.25-6.2l.56 6.2H12z"
    />
  {:else if variation === 'filled'}
    <circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" /><path
      d="M22.91 11.96C22.39 6.32 17.66 2 12 2S1.61 6.32 1.09 11.96l-.9 9.86c-.1 1.17.82 2.18 2 2.18h19.62c1.18 0 2.1-1.01 1.99-2.18l-.89-9.86zM4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87z"
    />
  {:else if variation === 'round'}
    <circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" /><path
      d="M22.91 11.96C22.39 6.32 17.66 2 12 2S1.61 6.32 1.09 11.96l-.9 9.86c-.1 1.17.82 2.18 2 2.18h19.62c1.18 0 2.1-1.01 1.99-2.18l-.89-9.86zM4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87z"
    />
  {:else if variation === 'sharp'}
    <circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" /><path
      d="M22.91 11.96c-.54-5.93-5.75-10.41-11.8-9.92-5.38.42-9.56 4.9-10.05 10.28L0 24h24l-1.09-12.04zM4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87z"
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
@prop export let ariaLabel = 'face 3';
-->
