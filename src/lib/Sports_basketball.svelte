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

  export let ariaLabel = 'sports basketball';
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07a8.12 8.12 0 0 1 1.16-3.25zM4.07 13h2.84a5.972 5.972 0 0 1-1.68 3.25A8.12 8.12 0 0 1 4.07 13zM11 19.93c-1.73-.22-3.29-1-4.49-2.14A7.952 7.952 0 0 0 8.93 13H11v6.93zM11 11H8.93A7.99 7.99 0 0 0 6.5 6.2 8.035 8.035 0 0 1 11 4.07V11zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25zM13 4.07c1.73.22 3.29.99 4.5 2.13a7.99 7.99 0 0 0-2.43 4.8H13V4.07zm0 15.86V13h2.07a8.006 8.006 0 0 0 2.42 4.79A7.988 7.988 0 0 1 13 19.93zm5.77-3.68A6.004 6.004 0 0 1 17.09 13h2.84a8.12 8.12 0 0 1-1.16 3.25z"
    />
  {:else if variation === 'filled'}
    <path
      d="M17.09 11h4.86a9.951 9.951 0 0 0-1.54-4.4 5.987 5.987 0 0 0-3.32 4.4zM6.91 11a5.987 5.987 0 0 0-3.32-4.4A9.951 9.951 0 0 0 2.05 11h4.86zm8.16 0a7.994 7.994 0 0 1 4.06-6A9.969 9.969 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 0 0 4.87 5a7.994 7.994 0 0 1 4.06 6zm6.14 2H13v8.95A9.943 9.943 0 0 0 19.13 19a7.994 7.994 0 0 1-4.06-6zM3.59 17.4A6.029 6.029 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 0 0 3.32 4.4 9.951 9.951 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 0 1-4.06 6A9.969 9.969 0 0 0 11 21.95V13H8.93z"
    />
  {:else if variation === 'round'}
    <path
      d="M17.09 11h4.86a9.951 9.951 0 0 0-1.54-4.4 5.987 5.987 0 0 0-3.32 4.4zM6.91 11a5.987 5.987 0 0 0-3.32-4.4A9.951 9.951 0 0 0 2.05 11h4.86zm8.16 0a7.994 7.994 0 0 1 4.06-6A9.969 9.969 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 0 0 4.87 5a7.994 7.994 0 0 1 4.06 6zm6.14 2H13v8.95A9.943 9.943 0 0 0 19.13 19a7.994 7.994 0 0 1-4.06-6zM3.59 17.4A6.029 6.029 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 0 0 3.32 4.4 9.951 9.951 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 0 1-4.06 6A9.969 9.969 0 0 0 11 21.95V13H8.93z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M17.09 11h4.86a9.951 9.951 0 0 0-1.54-4.4 5.987 5.987 0 0 0-3.32 4.4zM6.91 11a5.987 5.987 0 0 0-3.32-4.4A9.951 9.951 0 0 0 2.05 11h4.86zm8.16 0a7.994 7.994 0 0 1 4.06-6A9.969 9.969 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 0 0 4.87 5a7.994 7.994 0 0 1 4.06 6zm6.14 2H13v8.95A9.943 9.943 0 0 0 19.13 19a7.994 7.994 0 0 1-4.06-6zM3.59 17.4A6.029 6.029 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 0 0 3.32 4.4 9.951 9.951 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 0 1-4.06 6A9.969 9.969 0 0 0 11 21.95V13H8.93z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M8.93 11H11V4.07c-1.73.22-3.29.99-4.5 2.13A7.99 7.99 0 0 1 8.93 11zm11 0a8.12 8.12 0 0 0-1.16-3.25c-.87.87-1.47 1.99-1.68 3.25h2.84zM5.23 7.75A8.12 8.12 0 0 0 4.07 11h2.84a5.972 5.972 0 0 0-1.68-3.25zM4.07 13a8.12 8.12 0 0 0 1.16 3.25c.87-.87 1.47-1.99 1.68-3.25H4.07zm2.44 4.79A7.988 7.988 0 0 0 11 19.93V13H8.93a7.952 7.952 0 0 1-2.42 4.79zM17.5 6.2A7.97 7.97 0 0 0 13 4.07V11h2.07a7.99 7.99 0 0 1 2.43-4.8zm1.27 10.05A7.78 7.78 0 0 0 19.93 13h-2.84c.21 1.26.81 2.38 1.68 3.25zM13 13v6.93c1.73-.22 3.29-1 4.49-2.14A7.952 7.952 0 0 1 15.07 13H13z"
      opacity=".3"
    /><path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07a8.12 8.12 0 0 1 1.16-3.25zM4.07 13h2.84a5.972 5.972 0 0 1-1.68 3.25A8.12 8.12 0 0 1 4.07 13zM11 19.93c-1.73-.22-3.29-1-4.49-2.14A7.952 7.952 0 0 0 8.93 13H11v6.93zM11 11H8.93A7.99 7.99 0 0 0 6.5 6.2 8.035 8.035 0 0 1 11 4.07V11zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25zM13 4.07c1.73.22 3.29.99 4.5 2.13a7.99 7.99 0 0 0-2.43 4.8H13V4.07zm0 15.86V13h2.07a8.006 8.006 0 0 0 2.42 4.79A7.988 7.988 0 0 1 13 19.93zm5.77-3.68A6.004 6.004 0 0 1 17.09 13h2.84a8.12 8.12 0 0 1-1.16 3.25z"
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
@prop export let ariaLabel = 'sports basketball';
-->
