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

  export let ariaLabel = 'videogame asset off';
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
      d="M17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-6.67-1H20v8h-1.17l1.87 1.87c.75-.29 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83l2 2zm8.95 14.61L15.17 18H4c-1.1 0-2-.9-2-2V8c0-.85.55-1.58 1.3-1.87L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM13.17 16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17 8H4v8h9.17z"
    />
  {:else if variation === 'filled'}
    <path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3.3 6.13C2.54 6.41 2 7.15 2 8v8c0 1.1.9 2 2 2h11.17l4.61 4.61 1.41-1.42zM9 13v2H7v-2H5v-2h2V9.83L10.17 13H9zm11.7 4.87c.76-.28 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83L20.7 17.87zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
    />
  {:else if variation === 'round'}
    <path
      d="M20.7 17.87c.76-.28 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83L20.7 17.87zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm2.99 11.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.2 1.2C2.54 6.41 2 7.15 2 8v8c0 1.1.9 2 2 2h11.17l3.9 3.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zM10 13H9v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.05.01-.11.01-.16l3.14 3.14A.68.68 0 0 1 10 13z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M20.83 18H22V6H8.83l12 12zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm3.69 12.19L2.81 2.81 1.39 4.22 3.17 6H2v12h13.17l4.61 4.61 1.41-1.42zM9 13v2H7v-2H5v-2h2V9.83L10.17 13H9z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m10.83 8 8 8H20V8h-9.17zm6.67 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-4.33 4-3-3H9v2H7v-2H5v-2h2V9.83L5.17 8H4v8h9.17z"
      opacity=".3"
    /><path
      d="M17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-6.67-1H20v8h-1.17l1.87 1.87c.75-.29 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83l2 2zm8.95 14.61L15.17 18H4c-1.1 0-2-.9-2-2V8c0-.85.55-1.58 1.3-1.87L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM13.17 16l-3-3H9v2H7v-2H5v-2h2V9.83L5.17 8H4v8h9.17z"
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
@prop export let ariaLabel = 'videogame asset off';
-->
