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

  export let ariaLabel = 'houseboat';
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
      d="M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37-1.41 1.41 1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37-1.4-1.41zM13 13v-2h-2v2H9V8.18l3-2.2 3 2.2V13h-2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37-1.41 1.41 1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37-1.4-1.41zM13 13h-2v-2h2v2z"
    />
  {:else if variation === 'round'}
    <path
      d="M22 17.83c0-.42-.27-.8-.67-.94-.71-.27-1.12-.89-2.66-.89-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1s-2.1 1-3.34 1c-1.19 0-1.42-1-3.33-1-1.54 0-1.95.62-2.66.88-.4.15-.67.52-.67.95 0 .7.69 1.19 1.35.95.8-.29 1.18-.78 2-.78 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 .83 0 1.21.49 2 .78.66.24 1.35-.26 1.35-.95zm-3.09-8.02a.996.996 0 0 0-.22-1.4l-6.1-4.47a.99.99 0 0 0-1.18 0l-6.1 4.47c-.45.33-.54.95-.22 1.4.33.45.95.54 1.4.22L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-.66-.66a.996.996 0 1 0-1.41 1.41l.66.66c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l.66-.66a.996.996 0 1 0-1.41-1.41l-.66.66c-.18.18-.44.29-.7.29H17V9.65l.51.37c.45.33 1.07.23 1.4-.21zM13 13h-2v-2h2v2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66L18.67 13H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.33l-1.66-1.66-1.41 1.41L4.5 15h15l2.25-2.25-1.41-1.41zM13 13h-2v-2h2v2z"
    />
  {:else if variation === 'two-tone'}
    <path d="M13 13v-2h-2v2H9V8.18l3-2.2 3 2.2V13z" opacity=".3" /><path
      d="M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37-1.41 1.41 1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37-1.4-1.41zM13 13v-2h-2v2H9V8.18l3-2.2 3 2.2V13h-2z"
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
@prop export let ariaLabel = 'houseboat';
-->
