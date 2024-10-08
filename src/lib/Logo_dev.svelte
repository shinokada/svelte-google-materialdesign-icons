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

  export let ariaLabel = 'logo dev';
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
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z"
    /><path
      d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15z"
    />
  {:else if variation === 'filled'}
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z"
    /><path
      d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15z"
    />
  {:else if variation === 'round'}
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z"
    /><path
      d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z"
    /><path
      d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z"
    /><path
      d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15z"
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
@prop export let ariaLabel = 'logo dev';
-->
