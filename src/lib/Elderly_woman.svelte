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

  export let ariaLabel = 'elderly woman';
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
      d="M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5zm-6.9-8.09c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
    />
  {:else if variation === 'filled'}
    <path
      d="M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5zm-6.9-8.09c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
    />
  {:else if variation === 'round'}
    <path
      d="M18.52 11c-1.57 0-2.94-.9-3.6-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5L7 21c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2L11 19h2v3c0 .55.45 1 1 1s1-.45 1-1v-2.71c0-.22-.04-.43-.1-.64L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81V13c0 .28.22.5.5.5s.5-.22.5-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.79-.62-1.5-1.48-1.5zM11.6 2.91c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5zm-6.9-8.09c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5zm-6.9-8.09c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
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
@prop export let ariaLabel = 'elderly woman';
-->
