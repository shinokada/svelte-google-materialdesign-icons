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

  export let ariaLabel = 'spatial tracking';
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
      d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19zm4.05-16.59L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z"
    /><path
      d="m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z"
    />
  {:else if variation === 'filled'}
    <circle cx="10" cy="9" r="4" /><path
      d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z"
    /><path
      d="m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z"
    />
  {:else if variation === 'round'}
    <circle cx="10" cy="9" r="4" /><path
      d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3-13.8c-.43-.43-1.14-.39-1.51.09-1.5 1.93-3.35 6.72 0 11.03.37.48 1.08.52 1.5.09.35-.35.39-.91.09-1.3-1.17-1.5-2.64-5.23 0-8.61a.98.98 0 0 0-.08-1.3zm3.01 4.1c.23-.4.19-.9-.14-1.22-.47-.48-1.26-.37-1.59.21-1.15 2-.57 4.03.01 5.04.33.57 1.11.67 1.58.21.33-.33.36-.84.13-1.25-.25-.44-.74-1.69.01-2.99z"
    />
  {:else if variation === 'sharp'}
    <circle cx="10" cy="9" r="4" /><path
      d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z"
    /><path
      d="m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M20.05 2.41 18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z"
    /><path
      d="m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z"
    /><path
      d="M15.48 17.34C14.29 16.73 12.37 16 10 16c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88z"
      opacity=".3"
    /><circle cx="10" cy="9" r="2" opacity=".3" /><path
      d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19z"
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
@prop export let ariaLabel = 'spatial tracking';
-->
