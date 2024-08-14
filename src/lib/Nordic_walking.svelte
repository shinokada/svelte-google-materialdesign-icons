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

  export let ariaLabel = 'nordic walking';
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
      d="M19 23h-1.5v-9H19v9zM7.53 14H6l-2 9h1.53l2-9zm5.97-8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6a2.145 2.145 0 0 0-2.65-.84L6 8.3V13h2V9.6l1.8-.7z"
    />
  {:else if variation === 'filled'}
    <path
      d="M19 23h-1.5v-9H19v9zM7.53 14H6l-2 9h1.53l2-9zm5.97-8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6a2.145 2.145 0 0 0-2.65-.84L6 8.3V13h2V9.6l1.8-.7z"
    />
  {:else if variation === 'round'}
    <path
      d="M18.25 23c-.41 0-.75-.34-.75-.75V14H19v8.25c0 .41-.34.75-.75.75zM4.93 23c.35 0 .66-.24.73-.59L7.53 14H6l-1.8 8.09c-.1.47.25.91.73.91zM13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM14 23c.55 0 1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45L12.9 13.5l.6-3a7.321 7.321 0 0 0 4.36 2.41c.6.1 1.14-.38 1.14-.99 0-.49-.35-.91-.83-.98-1.53-.24-2.79-1.14-3.47-2.33l-1-1.6a2.155 2.155 0 0 0-2.66-.84L7.22 7.78C6.48 8.1 6 8.82 6 9.62V12c0 .55.45 1 1 1s1-.45 1-1V9.6l1.8-.7-2.55 12.86c-.13.64.36 1.24 1.02 1.24.49 0 .91-.34 1.02-.81L10.9 15l2.1 2v5c0 .55.45 1 1 1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M19 23h-1.5v-9H19v9zM7.53 14H6l-2 9h1.53l2-9zm5.97-8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6a2.145 2.145 0 0 0-2.65-.84L6 8.3V13h2V9.6l1.8-.7z"
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
@prop export let ariaLabel = 'nordic walking';
-->
