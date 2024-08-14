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

  export let ariaLabel = 'tire repair';
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
      d="M19 8a1.003 1.003 0 0 1-.71-1.71c.4-.4 2.46-1.04 2.46-1.04s-.64 2.06-1.04 2.46c-.18.18-.43.29-.71.29zm1 5v5c0 1.65-1.35 3-3 3s-3-1.35-3-3v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8.17A3.009 3.009 0 0 1 16 16v2c0 .55.45 1 1 1s1-.45 1-1v-5h-1v-1.42c-1.77-.77-3-2.53-3-4.58 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.05-1.23 3.81-3 4.58V13h-1zm2-6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM10 7 8 9V6.17L9.17 5H4.83L6 6.17V9L4 7v2.17l2 2V14l-2-2v2.17l2 2V19l-2-2v2h6v-2l-2 2v-2.83l2-2V12l-2 2v-2.83l2-2V7z"
    />
  {:else if variation === 'filled'}
    <path
      d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71z"
    /><path
      d="M19 2c-2.76 0-5 2.24-5 5 0 2.05 1.23 3.81 3 4.58V13h1v5c0 .55-.45 1-1 1s-1-.45-1-1v-2a3.009 3.009 0 0 0-4-2.83V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-3c0-.55.45-1 1-1s1 .45 1 1v2c0 1.65 1.35 3 3 3s3-1.35 3-3v-5h1v-1.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5zM6 19.5l-2-2v-2.83l2 2v2.83zm0-5-2-2V9.67l2 2v2.83zm0-5-2-2V4.67l2 2V9.5zm4 8-2 2v-2.83l2-2v2.83zm0-5-2 2v-2.83l2-2v2.83zm0-5-2 2V6.67l2-2V7.5zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  {:else if variation === 'round'}
    <path
      d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71z"
    /><path
      d="M19 2c-2.76 0-5 2.24-5 5 0 2.05 1.23 3.81 3 4.58V12c0 .55.45 1 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-3a3.009 3.009 0 0 0-4-2.83V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c0-.55.45-1 1-1s1 .45 1 1v3c0 1.65 1.35 3 3 3s3-1.35 3-3v-5c.55 0 1-.45 1-1v-.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5zM6 19.5l-2-2v-2.83l2 2v2.83zm0-5-2-2V9.67l2 2v2.83zm0-5-2-2V4.67l2 2V9.5zm4 8-2 2v-2.83l2-2v2.83zm0-5-2 2v-2.83l2-2v2.83zm0-5-2 2V6.67l2-2V7.5zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71z"
    /><path
      d="M19 2c-2.76 0-5 2.24-5 5 0 2.05 1.23 3.81 3 4.58V13h1v6h-2v-6h-4V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h2v6h6v-8h1v-1.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5zM6 19.5l-2-2v-2.83l2 2v2.83zm0-5-2-2V9.67l2 2v2.83zm0-5-2-2V4.67l2 2V9.5zm4 8-2 2v-2.83l2-2v2.83zm0-5-2 2v-2.83l2-2v2.83zm0-5-2 2V6.67l2-2V7.5zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M19 8a1.003 1.003 0 0 1-.71-1.71c.4-.4 2.46-1.04 2.46-1.04s-.64 2.06-1.04 2.46c-.18.18-.43.29-.71.29zm1 5v5c0 1.65-1.35 3-3 3s-3-1.35-3-3v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8.17A3.009 3.009 0 0 1 16 16v2c0 .55.45 1 1 1s1-.45 1-1v-5h-1v-1.42c-1.77-.77-3-2.53-3-4.58 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.05-1.23 3.81-3 4.58V13h-1zm2-6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM10 7 8 9V6.17L9.17 5H4.83L6 6.17V9L4 7v2.17l2 2V14l-2-2v2.17l2 2V19l-2-2v2h6v-2l-2 2v-2.83l2-2V12l-2 2v-2.83l2-2V7z"
    /><path
      d="M10 7 8 9V6.17L9.17 5H4.83L6 6.17V9L4 7v2.17l2 2V14l-2-2v2.17l2 2V19l-2-2v2h6v-2l-2 2v-2.83l2-2V12l-2 2v-2.83l2-2V7zm9-3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm.71 3.71a1.003 1.003 0 0 1-1.42-1.42c.4-.4 2.46-1.04 2.46-1.04s-.64 2.06-1.04 2.46z"
      opacity=".3"
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
@prop export let ariaLabel = 'tire repair';
-->
