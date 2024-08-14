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

  export let ariaLabel = 'stream';
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
    <circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" /><circle
      cx="12"
      cy="20"
      r="2"
    /><path
      d="m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z"
    /><circle cx="12" cy="4" r="2" />
  {:else if variation === 'filled'}
    <circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" /><circle
      cx="12"
      cy="20"
      r="2"
    /><path
      d="M10.05 8.59 6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027 4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z"
    /><circle cx="12" cy="4" r="2" />
  {:else if variation === 'round'}
    <circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" /><circle
      cx="12"
      cy="20"
      r="2"
    /><path
      d="m7.89 14.65-2.94 2.93a.996.996 0 1 0 1.41 1.41l2.94-2.93a.996.996 0 1 0-1.41-1.41zM6.41 4.94A.996.996 0 1 0 5 6.35l2.93 2.94c.39.39 1.02.39 1.42 0 .38-.39.38-1.02-.01-1.41L6.41 4.94zm9.71 9.71c-.39-.39-1.02-.39-1.42 0a.996.996 0 0 0 0 1.41L17.64 19a.996.996 0 1 0 1.41-1.41l-2.93-2.94zm-.06-5.32 2.99-2.98c.39-.4.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-2.99 2.98c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.41 0z"
    /><circle cx="12" cy="4" r="2" />
  {:else if variation === 'sharp'}
    <circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" /><circle
      cx="12"
      cy="20"
      r="2"
    /><path
      d="m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z"
    /><circle cx="12" cy="4" r="2" />
  {:else if variation === 'two-tone'}
    <circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" /><circle
      cx="12"
      cy="20"
      r="2"
    /><path
      d="m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z"
    /><circle cx="12" cy="4" r="2" />
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
@prop export let ariaLabel = 'stream';
-->
