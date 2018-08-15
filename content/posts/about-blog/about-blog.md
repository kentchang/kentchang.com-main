---
title: 'Migrating to Gatsby.js'
date: 'August 13, 2018 01:48:39PM (BST)'
slug: 'about-blog'
tags:
  - misc
---

For some very curious reason I have had to change my blogging platform
every now and then since I was 12 (seriously—I was tweaking pLog on my
13th birthday), so here I am.

<!--more-->

<blockquote>
<p class="character-speech">
<span class="sc">GWENDOLEN</span>: In matters of grave importance, style, not sincerity is the vital thing.
</p>
<cite>—<i>Earnest</i>, Wilde</cite>
</blockquote>

It’s not like I hated all the previous platforms I used. The previous
version of my website was basically a few static pages plus a Pelican
blog, which was good enough for my purpose in terms of functionality. The
issue, it seems to me, is always appearance. I created that Pelican blog
a year ago, and I learned Sass _after_ that. Sass is my savior, although
it has turned the Pelican theme I edited from a hot mess to a terrifying
hot mess. So I decided to give that up—not interested in going to all the
efforts to make my old theme go Sassy.

And for some reason, I find Pelican tiring, and out of my control. Pelican
is in many ways a good system, and it’s written in my favorite language.
But I found the writing process tedious: I had to type a few commands
which generated a Markdown file, do the writing, publish, upload, etc.
I thought I would get used to it (that’s how static sites work), and
90% of the things I do tend to be more complex. But the reality was
I was reluctant to even start writing.

True, the fact that I turned to Gatsby, which is more or less a React.js
version of Pelican, contradicts my complaints. I guess
I simply wanted to try another static site generator. Plus, React, Gatsby,
GraphQL—those sound much nicer than Python, Pelican, Anaconda, etc.
to me, who studied American literature in college and regularly use
Photoshop and Illustrator.

## Markdown to Contentful, to LaTeX to Markdown

I made some efforts trying to hook Gatsby up with Contentful. That was
the plan before I somehow screwed everything up. When I started all
over (literally), I paused a second thinking if I should actually use
Contentful. I still prefer to have local copies of Markdown files,
and who knows whether Contentful would shut down some day. Markdown
is widely supported, but Contentful is much less so, comparatively.
And now that I’m now much more comfortable with geeky stuff, I can
write a few Python scripts to make my life writing with Markdown
easier. It doesn’t have to be tedious.

So I ditched Contentful and embraced Markdown again. Now my workflow
roughly looks like this:

- run `gen.py` which generates `.tex` and `.md` header (front matter)
  files.

- write in the `.tex` file

- run `md.py` to use pandoc to convert `.tex` to `.md` and then join
  it with its header `.md` file; intermediate files are deleted

- edit the combined `.md` file as I see fit

- run `push.py` to push changes to Github

- let Netlify deploy it

- compile the `.tex` file and produce <span class="sc">PDF</span> if there’s a need.

There’s nothing too complicated here, and since I don’t know when I will
have time to write a tutorial of sorts, please just go ahead to my
[Github](https://github.com/kentchang/kentchang.com-main) if you’re interested in how this works out.

I think the current website looks better than the previous one. It has a
more consistent color scheme and layout, both absent before. I will have
to implement more components for the blog, but I guess for the time
being it’s good enough.

The background image on the landing page was
inspired by _The Marvelous Mrs. Maisel_ and I used the same font they
used for the show for my name.

The current title of the blog sounds like a bunch of words—queer, eerie, curable,
and of course, _Crucible_. The tag line should be reminiscent of songs from that little musical
called _Hamilton_; ‘shameless’ is there to surface the Dionysian sense of the word.
Titles create associations; those are the associations I want, and very effectively, I would say,
suggest what and how I might write. If you’re still unsure of the latter—look,
I stuck a Wilde quote in the beginning without bothering to analyze it. That is how I’m
intending to write here.
