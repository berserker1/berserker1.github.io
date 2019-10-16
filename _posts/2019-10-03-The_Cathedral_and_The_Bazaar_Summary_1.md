---
layout: post
title:  "The Cathedral and The Bazaar Summary part 1"
image: "/assets/img/cathedral_and_bazaar_book_cover.jpg"
date:   09/10/2019
tags:
- Open_Source Programming
- General Concepts
description: 'Detailed Summary of the book The Cathedral and The Bazaar'
categories:
- Book
---
*Its better to watch this article in `Desktop View` if you are using some short screen device.*  
Book Cover page *taken from the O'REILLY site.*
![Cover page of The Cathedral And The Bazaar]({{site.baseurl}}{{page.image}})
This is the first post of a series of blog posts on a detailed summary of the book **The Cathedral & The Bazaar Musings on Linux and Open Source by an Accidental Revolutionary, revised and expanded edition by O'REILLY**. You can see about the book [here](http://shop.oreilly.com/product/9780596001087.do).  
This is my first attempt to write something like this so please bear with me as my intentions are only pure. I was inspired to write this type of posts from a senior in my institute who writes [stuff](http://www.bauva.com/book_summary/) like this, the books on which the posts have been written are top notch, do check it out.

---

### About The Book And Why I Chose It

This book, written by [Eric S. Raymond](https://en.wikipedia.org/wiki/Eric_S._Raymond), introduces open source methodology, its revolution in the software development industry as a whole. The author very extensively puts the reasons for this ethical as well as logical. He argues that this type of model for building various things are very powerful in terms of speed as well as quality. Various examples are given including his own product, [Fetchmail](https://en.wikipedia.org/wiki/Fetchmail).

- The book in detail gives reasons that `Open-Source` is not just an ethical reason, meaning people do not put forward their source code of the tools they made, hence making the users co-developers as well as debuggers; just because they are doing the  `morally right` thing in their own perspective (*although this reason alone is compelling enough for many*). It is also better form of development and the complex softwares it has produced, to the surprise of many are state-of-art in their respective domains (*take [Linux](https://en.wikipedia.org/wiki/Linux) for example*).

- Over the internet you will see various people at eminent positons in the IT industry recommending this to people who will be doing some form of software development in their lifetime. That is why I am reading this book, in order to learn extensively about `Open-Source` development and hopefully include various of these principles, understand why I am applying the already existing ones and formalize them, in [KOSS](https://kossiitkgp.org/) in which I am as of now.

- Also I am determined to write an extensive summary for anyone who wishes to understand in short (*or maybe discuss in the comment section*) the various concepts the book puts forward.
My main aim is to break down and explain the relevant points (*according to my own understanding*) and side by side referencing the snippets which I find necessary, of the texts in the book.

---
This blog post discusses only the **first section, The Cathedral And The Bazaar** as this section has rich enough content, so only a dedicated and individual post to it will do justice to the knowledge it wants us to obtain (*my opinion entirely*).

---

Below is the detailed summary chapter-wise. Each chapter may also have sub-sections which are clearly defined below.

### 1.The Cathedral And The Bazaar

The author's writing style is the division of his work into various sections, each of which lays down certain explanations along with building the story. Along with explaining certain concepts in the following subsections, various principles the author breaks down for us in each subsection, to understand, and hoping for us to follow. They are stated and explained as follows in the same order as written in the book.

#### a.The Cathderal And The Bazaar

(*Really awkward when the sub-section name is same as that of the section*)  
The author introduces to us his own view of development that not only him but many emminent programmers of that time believed very much to be fundamental and true and how [Linus Torvald](https://en.wikipedia.org/wiki/Linus_Torvalds) changed the perception drastically.
> I had released a good deal of open-source software onto the Net, developing or co-developing several programs (nethack, Emacs's VC and GUD modes,xlife, and others) that are still in wide use today. I thought I knew how it was done.
>
> Linux overturned much of what I though I knew. I had been preaching the Unix gospel of small tools, rapid prototyping, and evolutionary programming for years. But I also believed that there was a certain complexity above which a more centralized, *a priori* approach was required. I believed that the most important software (operating systems and really large tools like the Emacs programming editor) needed to be built like cathedrals, carefully crafted by individual wizards or small bands of mages working in the splendid isolation, with no beta to be released before its time.
>
> Linux Torvald's style of development-- release early and often, delegate everython you can, be open to the point of promiscusity--came as a surprise. No quiet, reverent cathedral-building here--rather, the Linux community seemed to resemble a great babbling bazaar of different agendas and approaches (aptyl symbolized by the Linux archive sites, which would take submissions from *anyone*) out of which a coherent and stable system could seemingly emerge only by a succession of miracles.

- One important observation was, somehow this haphazard development did not spiral out in confusion but actually was collaborative somehow and went at a speed barely imaginable to cathedral-builders.

- The author was not able to understand why this type of development altohugh successful (*cause certainly everybody immeditaly realized Linux's portability and effectiveness and it was the best version of Unix by many standards*) was working the way it was.

- However, he got an open-source project and he used this opportunity to run its development in the **bazaar** style mode.

---

#### b.The Mail Must Get Through

The author tells how he got hold of maintaining a whole program named `popclient`.

- **Every Good Work Of Software Starts By Scratching A Developer's Personal Itch.**
  - With the current scenario `Eric` was working, he had a dire need of a `POP3` client but there was an obvious feature it was missing.
  - For the above mentioned problem he theorized that many developers work only for the money and as soon as they get they do not worry more about the software. This behaviour being non-existent in the Linux world (*as people work/create many open-source projects of their choice/liking*) may be the reason for average quality of the softwares in their world being high in their world.

- **Good Programmers Know What To Write, Great Ones Know What To Rewrite (And Reuse).**
  - The author greatly emphasise the point of `Constructive Laziness`, in his own words.
  > An important trait of great ones is constructive laziness. They know that you get an A not for effort but for the results, and that it's almost always easier to start from a good partial solution than from nothing at all.
  - To solve his own problem he began looking for an existing client online to use as his own developmental base.
  - His earlier choice was `fetchpop` which could only handle `POP3`. He made several contributions to it. Later he stumbled upon another named `popclient` which was better written, had multiple protocol support.

- **Plan To Throw One Away; You Will, Anyhow.**
  - The book explains that in many cases people do not understand the problem well unless they start making a solution, the second time you probably will implement a well planned solution. He considered working for `fetchpop` his `first attempt` and now considered switching to `popclient`.

- **If You Have The Right Attitude, Interesting Problems Will Find You.**
  - `Eric` saw had various ideas he could implement in `popclient`, many interesting problems he could. The execution of these ideas requried various major changes.

- **When You Lose Interest In A Program, Your Last Duty To It Is To Hand It Off To A Competent Successor.**
  - The maintainer of `popclient` was not interested in the project anymore, he saw `Eric` as a worthy successor as `Eric` had contributed some patches and shown promise, so he gave ownsership to him.
  - This was done keeping in mind the best interest of the software and not considering anyone's ego.

---

#### c.The Importance Of Having Users

The one thing the author realized as critical in the open-source culture is treating your users as hackers too.
>Another strength of Unix tradition, one that Linux pushes to a happy extreme, is that a lot of users are hackers too. Because source code is available, they can be *effective* hackers. This can be tremendously useful for shortening debugging time.

The book adds another conclusion on top of the above mentioned concept.

- **Treating Your Users As Co-Developers Is Your Least-Hassle Route To Rapid Code Improvement And Effective Debugging.**
  - The power of applying this concept was actually underestimated by many until `Linus` applied it to the extreme and everyone saw the result.
  - Example about the development model of `Emacs Lisp Library` is mentioned in the book.
  > In contrast to the cathedral building style of the Emacs C core and most other GNU tools, the evolution of the Lisp code pool was fluid and very user-driven. Ideas and prototype modes were often rewritten three or four times before reaching a stable final form. And loosely-coupled collaborations enabled by the Internet *a la* Linux, were frequent.

---

#### d.Release Early, Release Often

Many including the author believed that for big projects that releasing versions too hastily is bad as the code will be buggy and this will give a bad reputation to the users. The main objective was for the users to see as few bugs as possible. This conception overall reinforced the `Cathedral Building Style`.

- `Linus` did the opposite and somehow the product `Linux` which he was working on was going super fast and efficient.
  - According to the author himself.
  >Linus's open development policy was the very opposite of cathedral-building. Linux's Internet archives were burgeoning, multiple distributions were being floated. And all of this was driven by an unheard-of-frequency of core system releases.
  >
  >Linus wsa treating his users as co-developers in the most effective possible way:

- **Release Early, Release Often. And Listen To Your Customers**
  - For the development of `Linux` this concept was scaled to much bigger level as the product to be designed was also of great complexity.
  - The author explains that doing this will be sort of *ego-satisying reward for their work*, hence constant release will be somewhat of a continuous stimulus to them.

- **Given A Large Enough Beta-Tester And Co-Developer Base, Almost Every Problem Will be Characterized Quickly And The Fix Obvious To Someone.**
  - Also stated as **Given enough eyballs, all bugs are shallow**, the author dubbed this as **Linus Law**.
  - The above mentioned law is theorised by the book to be the core difference between `bazaar style` and `cathedral-building style` of development models.
  - It also states that *it can be the case that, one person identifies the problem, another points out the reason and a third one fixes it*. Given the above mentioned rule is applied (*meaning beta-testers are large*), then this process will happen rapidly.
  - A question can arise in one's mind after reading all of this.  
  *If such large amount of people are doing debugging and development, then shouldn't the amount of duplicacy increases as well as the cost of managing these people which can theoretically decrease the efficiency?*
  - The author replies
  >Although debugging requires communication to the developer, not much communication is required between debuggers.
  >
  >In practice theoretical loss of efficiency due to duplication work by debuggers almost never seems to be an issue in the Linux world. One effect of "release early and often" policy is to minimize such duplication by propagating fed-back fixes quickly.

---

#### e.Many Eyeballs Tame Complexity

Here is an extensive discussion upon the reason for the work in the `bazaar model` to be efficient and fast, especially if we talk in the context of finding and fixing bugs. Several facts are presented to support the claim:

- Making the source code public gives the testers to identify the bug at the code level rather than reporting only the surface problem.
  - The author writes:
  >Non-source-aware users tend to report only surface symptoms; they take their environment for granted, so they a) omit critical background data, and b) seldom include a reliable recipe for reproducing the bug.
  >
  >Practically there is a huge difference in leverage for the developer between the kind of bug report that just reports externally visible symptoms and the kind that hooks directly to the developer's source-code-based mental representation of the program.
  >
  >Most bugs, most of the time, are easily nailed given even an incomplete but suggestive characterization of their error conditions at source-code level.

- Another important factor is the **Brooks's Law**.
  - It states that **Adding more programmers to a late project makes it later.**
  - This law assumes that the `communication model` of all the people involved in building the software is a `complete graph` (*meaning is communicating with every other person*). The preceeding theory is that bugs generally arise at the inteface of different poeple's contributions. To solve this communication is required, the complexity of which rises `quadratically` (*if the assumption of complete graph holds*).
  - In the case of `bazaar model` the beta-testers (*the user-base which are being effective hackers*) do not need to necessarily make contact with each other. This results in little overhead.
    - As stated in the book:
    >But on open-source projects, the halo developers work on what are in effect separable parallel subtasks and interact with each other very little; code changes and bug reports stream through the core groups, and only *within* hat small core group we pay the full Brooksian overhead.
  - Another important observation is made by the author regarding bug-detection and solving:
    - Many complex errors have different `trace paths` from the surface level, if more independent beta-testers will be there then there is a high chance for atleast one person to find the less complexity path to the bug.
    - From the above point another question arises.  
    *If the amount of conrtributors and beta-testers are large and several of them are trying to identify a complex bug, then some amount of people will be going through a complex path and the other amount will be taking a short path, the people going through the short path will identify the bug in the source code early and hopefully it will be fixed, but then won't the people who took the long path will be wasting their time?*
      - The author replies by laying down the complete understanding of this concept which automatically clears the question:
      >A single developer sampling those paths sequentially will be likely to pick a difficult trace path on the first try as an easy one.
      >
      >On the other hand, suppose many people are trying trace paths in parallel while doing rapid releases. Then it is likely one of them will find the easiest path immediately, and nail the bug in a much shorter time. The project maintainer will see that, ship a new release, and the other people running traces on the same bug will be able to stop before having spent too much time on their more difficult tracees.

---

#### f.When Is A Rose Not A Rose

The author started to revamp the codebase as to make some major changes. He also wanted to test the `bazaar model`, so he started doing the required principles for this model like making early releases, announcing more often, listening to beta-tester etc.

- **Smart Data Structures And Dumb Code Works A Lot Better Than Other Way Around.**
  - This is the author's advice especially to people heavily indulged in C programming.
  - The author explains this to be a:
  >A general principle that's good for programmers to keep in mind, especially in langauges like C that don't do dynamic typing.
  - *Not much research on this is done on my side regarding this approach as I admit to being naive at this point to comment on this. I am however, open to discussion in the comments to learn about this maybe even add it to my post with reference to the one who contributed.*
  - *Edit: You can check out [this](http://disq.us/p/24yyokx) comment written below, the one who posted this has a fair amount of skill (one can easily check).*

- **If You Treat Your Beta-Testers As If They're Your Most Valuable Resource, They Will Respond By Becoming Your Most Valuable Resource.**
  - After applying the `bazaar` model the result were immediate and great, the beta-testers were contributing to great extent, the quality of contribution was great and the project's development was in full throttle.

---

#### g.Popclient Becomes Fetchmail

The book dives more into the development of the project `Fetchmail` the author was working upon.  
In this section the author explains a simple idea suggested by one of the userbase which can immediately result in making other competitors obsolete.  
Several observations he made regarding the refinement and implementation of it:

- **The Next Best Thing To Having Good Ideas Is Recognizing Good Ideas From Your Users. Sometimes The Latter Is Better.**
  - When the beta-testers are large enough to form a big resource pool, then ideas start to come in and the maintainer can already see healthy discussions regarding the pros adn cons of the feature start to happen resulting in the refinement of the concept.
  - So its high chance that the idea would be implementation worthy, ignoring every input by the userbase and relying only on your skill is bad practice in the `bazaar model`.
    - The author himself states:
    >So I believe the fetchmail project succeded partly because I restrained my tendency to be clever; this argues (at least) against design originality being essential for successful bazaar projects. And consider Linux. Suppose Linus Torvalds had been trying to pull off funadmental innovations in operating system design during development; does it seem at all likely that the resulting kernel would be as stable and successful as what we have?
  - This does not at all means doing no innovative part of your own and just complying to with whatever the userbase wants. This actually means `Powerful knack for recognizing good design and integrating it into the project`.

- **Often, The Most Striking And Innovative Solutions Come From Realizing That Your Concept Of The Problem Was Wrong.**
  - This does not need much explanation, analysing the problem with a different angle can yield a viable solution.
  - The author has explained this using his own problem he faced while developing `Fetchmail`.(*But that technical jargon is not included here in this post as that is not the objective of this post*)

- **"Perfection (In Design) Is Achieved Not When There Is Nothing More To Add, But Rather When There Is Nothing More To Take Away."**
  - `Eric` has applied this ideology and wants to share with us.
  - This quote, as mentioned in the book; is said by [Antoine de Saint-Exupéry](https://en.wikipedia.org/wiki/Antoine_de_Saint-Exupéry).

At this point, the author identifies his postion of now to the readers, of being able to sufficiently made major changes to `popclient`, added one core feature signifying uniqueness, now the project was in its own right a new one, he now needed to give this project a new identity, so the author named it `Fetchmail`.

---

#### h.Fetchmail Grows Up

Author adds more experience he learned as the project evolved.

- One important observation is that many successful piece of software were developed on the base of other softwares. Using the existing ideas and pushing them to extreme to cross thresholds is the important part.

- **Any Tool Should Be Useful In The Expected Way, But A Truly Great Tool Lends Itself To Uses You Never Expected.**
  - Here the writer out of its own experience ponders upon the fact that, when implementing some feature/design changes with some view in mind, can also lead to some other benefit you never have thought of at first.
  - The above point usually happens when you have the *robustness* and *simplicity* whenever you make some development to the existing product.

- **When Writing Gateway Software Of Any Kind, Take Pains To Disturb The Data Stream As Little As Possible -- And never throw away information unless the recipient forces you to!**
  - *This is specifically to tech so reader may or may not read it.*
  - The author emphasise the importance of keeping clean and minimal code (*which he was maintaining*) so as to not disturbing the flow of data when required. When there was a demand for [8 bit MIME](https://stackoverflow.com/questions/3384065/whats-8bitmime), it was easy thing to do as unused bits he already kept for him to use.

---

#### i.A Few More Lessons From Fetchmail

 *The writer here emphasise more technical knowledge and tips, readers may or may not read this.*

- **When Your Language Is Nowhere Turing Complete, Syntactic Sugar Can Be Your Friend.**
  - See meaning of [Turing Completeness](https://en.wikipedia.org/wiki/Turing_completeness) for reference.
  - If the language will tend to be more english-like then parsing can be proved costly.
  - If your language has many restrictions and it is not much powerful, then using some predefine things, or dressing it up will be a good practice for people to use.

- **A Security System Is Only As Secure As Its Secret. Beware Of Pseudo-Secrets.**

---

#### j.Necessary Preconditions For The Bazaar Style

Here all conditions are summed up for starting one's own `bazaar style` developement of their project. Many points in the above sections are recapped in this one section.

- Familiarty with coding and hacking skill.
- Better to start upon a base rather than to work from scratch up.
  - The author writes:
  > It's fairly clear one cannot code form the ground up in bazaar style. One can test, debug and improve in bazaar style, but it would be very hard to originate a project in bazaar mode. Linus didn't try it. I didn't either. Your nascent developer community needs to have something runnable and testable to play with.
  - *My Opinion*
    - I however do not completely agree to the this idea, one can definitely say for sure that most of the ideas and projects one can try to start working on, would have been done by someone to certaing degree in the open source world and its better to use it as a base; but this does not nullify the fact that open-source community is stagnant of completely new ideas to work upon. Every year someone would have made (or started to make) a project nobody had worked upon before.
- Able to recognize good ideas suggested by the userbase.
- Good communication skills for motivating, attracting people and increasing your userbase.

---

#### i.The Social Context Of Open-Source Software

The author here try to generalize the ideas, put forward by the `bazaar model` as a general principle one can follow.

- **To Solve An Interesting Problem, Start By Finding A Problem That Is Interesting To You.**
  - We can already see this in practice especially in the field of computer-science, in the field of technilogy as a whole. New features are added because somebody earlier had a problem doing certain task. `Fetchmail` is also the result of this.
- Again the concept of contributions by open-sourcing the code is explained, psychologically this time; with providing a reference.
  - The author writes that from [Gerald Weinberg's](https://en.wikipedia.org/wiki/Gerald_Weinberg) book [The Psychology of Computer Programming](https://dl.acm.org/citation.cfm?id=536771), he explains:
  >In his discussion of egoless programming, Weingberg observed that in shops where developers are not territorial about their code, and encourage other people to look for bugs and potential improvements in it, improvement happens dramatically faster than elsewhere.
  - *My Opinion*
    - I think this concept can be definitely applied to other areas of science, it may be in application as of now (*I do not know, but am considering the possibility*) and I would like to think we have somehow `reinvented` it in our field of development specifically.
- Cheap method of communication and contribution was important, hence as the Internet boomed so the adoption of `bazaar model`.
  - An interesting observation is noted down in the book:
  >I don't think it's a coincidence that the gestation period of Linux coincided with the birth of the World Wide Web, and that Linux left its infancy during the same period in 1993-1994 that saw the takeoff of the ISP industry and the explosion of mainstream interest in the Internet. Linus was the first person who learned how to play by the new rules that pervasive Internet access made possible.
- Leadership skills to attract other people for contributing to our work and getting the maximum of them is essential.
  - The author again from `Weinberg's` work point out that acting on the principle of common understanding is much beneficial and effective.
  - The author writes:
  > We may view Linus's method as a way to create an efficient market in "egoboo"-- to connect the selfishness of individual hackers as firmly as possible to difficult ends that can only be achieved by sustained cooperation.
- **Provided The Developement Coordinator Has A Communication Medium At Least As Good As The Internet, And Knows How To Lead Without Coercion, Many Heads Are Inevitably Better Than One.**
  - With everything explained in the above points, we can easily understand this statement.
