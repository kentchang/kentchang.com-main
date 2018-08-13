---
title: 'Migrating to Gatsby.js'
date: '2018-08-13T13:48:39.280255+01:00'
slug: about-blog
tags: 'misc'
---

For some very curious reason I have had to change my blogging platform
every now and then since I was 12 (seriously—I was tweaking pLog on my
13th birthday), so here I am.

It’s not like I hated all the previous platforms I used. The previous
version of my website is basically a few static pages plus a Pelican
blog, which is good enough for my purpose in terms of functionality. The
issue, it seems to me, is always appearance. I created that Pelican blog
a year ago, and I learned Sass _after_ that. Sass is my savior, although
it has turned the Pelican theme I edited from a hot mess to a terrifying
hot mess. So I decided to give that up.

And for some reason, I find Pelican tiring, and out of my control. This
doesn’t sound sensible; I guess I simply wanted to try another static
site generator. I then found Gatsby.js, which is based on React.js.
React, Gatsby, GraphQL—those sound much nicer than Python, Pelican,
Anaconda, etc. to me, who studied American literature in college and
regularly use Photoshop and Illustrator.

Of course I could go analytical—Pelican is in many ways a good system,
and it’s written in my favorite language. But I just find the writing
process tedious. I had to type a few commands which generate a Markdown
file, do the writing, publish, upload, etc. I thought I would get used
to it (that’s how static sites work), and 90% of the things I do tend to
be more complex. But the reality is I am reluctant to even start
writing.

Pick whatever reason you like. But as it turns out, the irony is I have
to do more or less the same thing with Gatsby here too. Originally, I
decided to use Contentful with Gatsby, but later gave up, not for
technical reasons, but because I simply prefer to have a local copy of
Markdown files, which I also used with Pelican. So, the difference is
not really the platform. It’s me. I’m now much more comfortable with
geeky stuff, and I’ve found smarter ways to do things. My workflow now
roughly looks like this:

- run `gen.py` which generates `.tex` and `.md` header (front matter)
  files.

- write in the `.tex` file

- run `md.py` to use pandoc to convert `.tex` to `.md` and then join
  it with its header `.md` file

- edit the combined `.md` file as I see fit

- run `push.py` to push changes to Github

- let Netlify deploy it

- compile the `.tex` file if there’s a need.

There’s nothing too complicated here, and since I don’t know when I will
have time to write a tutorial of sorts, please just go ahead to my
Github if you’re interested in how this works out.

I think the current website looks better than the previous one. It has a
more consistent color scheme and layout, both absent before. I will have
to implement more components for the blog, but I guess for the time
being it’s good enough. The background image on the landing page was
inspired by _The Marvelous Mrs. Maisel_ and I used the same font they
used for the show for my name.
