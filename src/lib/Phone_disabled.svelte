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

  export let ariaLabel = 'phone disabled';
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
      d="m17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54zm-2.82 2.81A16.884 16.884 0 0 1 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26zm-6.92-.33c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75l-1.2-1.19zM17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79h-1.51z"
    />
  {:else if variation === 'filled'}
    <path
      d="m17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54zm-2.82 2.81A16.884 16.884 0 0 1 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26z"
    />
  {:else if variation === 'round'}
    <path
      d="M14.54 17.37a16.868 16.868 0 0 1-9.45 3.61c-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c.81-.41 1.59-.9 2.31-1.45L2.1 4.93a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0L20.49 20.5a.996.996 0 1 1-1.41 1.41l-4.54-4.54zm2.85-6.57-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07a16.94 16.94 0 0 1-3.62 9.47l-1.43-1.43c.55-.73 1.04-1.51 1.46-2.33z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M14.52 17.35C11.39 19.83 7.36 21.22 3 20.97v-5.51l5.27-.61 2.52 2.52c.81-.41 1.58-.9 2.3-1.45L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26zm1.39-4.24c.56-.73 1.05-1.51 1.47-2.33l-2.53-2.53.61-5.25h5.51c.25 4.37-1.15 8.4-3.63 11.54l-1.43-1.43z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54zm-2.82 2.81A16.884 16.884 0 0 1 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26zM17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79h-1.51zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75l-1.2-1.19z"
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
@prop export let ariaLabel = 'phone disabled';
-->
