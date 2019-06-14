---
layout: post
title: "GNU Mailman Organization"
image: '/assets/Gnu_mailman_logo.png'
date: 14/6/2019
tags:
- GSoC
- GNU Mailman
description: 'Short explanation regarding my GSoC work and org'
categories:
- GSoC
---
Its logo:
![GNU Mailman Logo](https://raw.githubusercontent.com/berserker1/berserker1.github.io/master/assets/Gnu_mailman_logo.png)
[GNU Mailman](https://en.wikipedia.org/wiki/GNU_Mailman) is a free software under the GNU Project, it is licensed under the GNU General Public License. This software basically manages various electronic mailing lists and provides lots of features on how to handle them. Mailman has been a regular organization under the GSoC project.
The current maintainer of this project and one of my mentors is Abhilash Raj (handle: [maxking](https://asynchronous.in)).

### The Feature, The Decription and The Problem

As I mentioned the software has various features, one of the most important one being **extracting and handling bounces** which is my project in this year's GSoC. To fully understand what my role is and how do I intend to approach it we need to understand some concepts and then the underlying problem.  
`First, let's explain bounces in short.`

- Many emails subscribe to a mailing list and receive emails from that list as well as they post also in list (it can be under a thread or a new thread itself), this is the usual expected behaviour. Whoever is using this software for maintaining their domain which has several mailing-lists will have to hook it up to a certain mail-server or [MTA](https://en.wikipedia.org/wiki/Message_transfer_agent) (Mail Transport Agent). This server handles all the incoming and outgoing emails and then are forwarded to the respective client. If Mailman receives an email, it will be first received by this server before passing it to Mailman.  
*See [this](https://mailman.readthedocs.io/en/latest/src/mailman/docs/mta.html?highlight=Mail%20server) doc for more reference.*

- Keeping the above point in mind if there happens to be a case of the mail not being successfully delivered to the respective address, then an automated message called a "bounce" message is received back to the server explaining the mail was not able to fully reach the destination.  
*See the [wiki](https://en.wikipedia.org/wiki/Bounce_message) page for more info regarding bounce messages*

---
Everything is fine according to the above summary but there is just one problem, the bounce message cannot explain very clearly that which address in the mailing list's roster (`roster` means a list containing all the mailing lists's subscribers) did the message was sent to. This information is important as we are able to find those members whose emails are generating the bounces. These emails could outdated or had some strict regulations and had banned this mailing-list. The mailing list will atleast disable the members subscription and will ask to renew it if not remove the user completely.  
`Keeping the roster up to date with current status of the emails is highly important for the mailing list for its efficieny.`  

There are some solutions to this the most common one being [VERP](https://en.wikipedia.org/wiki/Variable_envelope_return_path).

- It stands for `Variable Envelope Return Path`. It actually makes a different `return path`() for each message receiver.  
*Quoting this excellent example from wikipedia*  

    >Assume there is a mailing list called wikipedians@example.net and that an individual, bob@example.org has subscribed to it, but later on, Bob has left example.org, so his address is no longer valid. Consider what happens when someone sends a message to the list.

    >**Without VERP**  
    >Without VERP, the mailing list manager might send a message with the following characteristics:
    >- envelope sender: wikipedians-owner@example.net  
    >- recipient: bob@example.org  
    >This would result in a bounce, generated by the MTA of either example.net or example.org, with the following characteristics:  
    >- envelope sender: empty
    >- recipient: wikipedians-owner@example.net
    >- contents: example.org was unable to deliver the following message to bob: ...  
    >The mailing list manager can't be expected to understand the contents of this bounce, and can't deduce anything from the recipient address because hundreds of other people besides Bob were also sent messages from wikipedians-owner@example.net.

    >**With VERP**  
    >With VERP, the original message would be different:  
    >- envelope sender: wikipedians-owner+bob=example.org@example.net
    >- recipient: bob@example.org
    >- The bounce, then, will be more useful:
    >- envelope sender: empty
    >- recipient: wikipedians-owner+bob=example.org@example.net
    >- contents: example.org was unable to deliver the following message to bob: ...  
    >From this bounce message the mailing list manager can deduce that a message to bob@example.org must have failed.
    >This example shows the simplest possible method of matching a VERP to a list subscriber: the entire recipient address is included within the return path, with the at sign replaced by an equals sign because a return path with two at signs would be invalid. Other encoding schemes are possible.

So we understood that using VERP we can identify exactly the emails in our roster to which when we send our emails, the bounces are being generated. This whole above explanation is the first part of bounce handling, basically the `extracting part` where we had all the required information we need.  
Now we have all the info, now what do to? Disable their subscriptions immediately? .......Not exactly, see here is where the problem starts.  
Mail not being received to whome it was intended to has lots and lots of reasons, bad recipient address is just one of them. Their can be connection issues at all sort of levels which generate bounces. Speaking coarsely we receive the bounce message something like  
**Bounce Message**  
```Oh! Snap mail to x@ymail.com was unable to deliver, something must wrong somewhere```  
**ME**  
Reads: `something must be wrong somewhere`

### Description of My Project