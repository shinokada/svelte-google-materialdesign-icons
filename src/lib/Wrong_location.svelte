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

  export let ariaLabel = 'wrong location';
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
      d="M18 11v.2c0 2.34-1.95 5.44-6 9.14-4.05-3.7-6-6.79-6-9.14C6 7.57 8.65 5 12 5c.34 0 .68.03 1 .08V3.06c-.33-.04-.66-.06-1-.06-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8V11h-2z"
    /><circle cx="12" cy="11" r="2" /><path
      d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z"
    />
  {:else if variation === 'filled'}
    <path
      d="M14 10V3.26c-.65-.17-1.32-.26-2-.26-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-.41-.04-.81-.09-1.2H14zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    /><path
      d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z"
    />
  {:else if variation === 'round'}
    <path
      d="m20.42 4.5 1.38-1.38a.996.996 0 1 0-1.41-1.41L19 3.08 17.62 1.7a.996.996 0 1 0-1.41 1.41l1.38 1.38-1.38 1.38a.996.996 0 1 0 1.41 1.41L19 5.92l1.38 1.38a.996.996 0 1 0 1.41-1.41L20.42 4.5z"
    /><path
      d="M19.67 8 19 7.33l-.59.59c-.7.7-1.84.88-2.65.3a2.005 2.005 0 0 1-.26-3.05l.67-.67-.67-.67c-.36-.36-.54-.81-.57-1.28C14.01 2.19 13.02 2 12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2c0-.76-.1-1.47-.26-2.14-.02-.02-.05-.04-.07-.06zM12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M14 10V3.26c-.65-.17-1.32-.26-2-.26-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-.41-.04-.81-.09-1.2H14zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    /><path
      d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M18 11v.2c0 2.34-1.95 5.44-6 9.14-4.05-3.7-6-6.79-6-9.14C6 7.57 8.65 5 12 5c.34 0 .68.03 1 .08V3.06c-.33-.04-.66-.06-1-.06-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8V11h-2z"
    /><circle cx="12" cy="11" r="2" /><path
      d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z"
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
@prop export let ariaLabel = 'wrong location';
-->
