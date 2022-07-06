import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : " Jugjugg Jeeyo: Neetu Kapoor captures the raw anguish of a loveless marriage in one scene, everything else is just noise",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 28, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/jugjugg-jeeyo-box-office.jpg",
            "BlogContent"   : "In Jugjugg Jeeyo, Neetu Kapoor silences a flustered Varun Dhawan, who plays her son, after he snaps at Kiara Advani, her daughter-in-law, with just a few words, “Khabardar Naina se aise baat ki mere saamne (Don’t you dare talk to Naina like that in front of me).”",
            "Likes"         : "1000K",
            "id" : "1"
        },
        {
            "Title" : " Alia Bhatt, Ranbir Kapoor announce pregnancy, share photo from the hospital: 'Baby coming soon'",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 28, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/ralia.jpg",
            "BlogContent"   : "Actors Alia Bhatt and Ranbir Kapoor have made a surprising announcement. Alia took to Instagram and shared a photo with Ranbir Kapoor in the hospital, confirming that the couple is expecting their first child soon. Her second photo featured two lions and a lion cub.Alia wrote, “Our baby ….. coming soon.”",
            "Likes"         : "700",
            "id" : "2"
        },
        {
            "Title" : " Sidhu Moosewala’s team files FIR against those leaking his unreleased songs: ‘We will not forgive…’",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 28, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/sidhu-moose-wala-1.jpeg?resize=450,250",
            "BlogContent"   : "Singer Sidhu Moosewala’s team has issued a statement, warning that legal action would be taken against those who try to leak and circulate his unreleased songs. In a message shared on Sidhu’s Instagram story,  it was revealed that an FIR has already been filed against those involved in the matter. The note also mentioned that one of the accused had already been arrested in the case. Sidhu’s mother Charan Kaur had forgiven the first accused according to the note, the next ones would not get the same treatment, they warned.",
            "Likes"         : "5000K",
            "id" : "3"
        },
        {
            "Title" : " Amitabh Bachchan was minding his own business, then Aamir Khan knocked on his car window. See picture here",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "June 28, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/aamir-khan-amitabh-bachchan.jpg?resize=450,251",
            "BlogContent"   : "Amitabh Bachchan bumped into Aamir Khan on Monday, and couldn't help but share a picture of their chance encounter on Instagram.",
            "Likes"         : "600",
            "id" : "4"
        },
        {
            "Title" : " Tiger Shroff tries hard to ‘keep up with’ dad Jackie Shroff in new video, fans call him ‘OG style king’",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "JUNE 28, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/tiger-jackie-shroff.jpg?resize=450,251",
            "BlogContent"   : "Tiger Shroff and Jackie Shroff posed together for cameras, and fans had a field day complimenting the father-son duo.",
            "Likes"         : "800",
            "id" : "5"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : "FCC Commissioner writes to Apple and Google about removing TikTok",
            "CategoryName"  : "Technology",
            "PublishedDate" : "June 29, 2022",
            "ImageAsset"    : "https://techcrunch.com/wp-content/uploads/2022/04/tiktok-header.webp?w=430&h=230&crop=1",
            "BlogContent"   : "FCC Commissioner Brendan Carr wrote to Apple and Google on Tuesday, requesting the companies to remove TikTok from their app stores for “its pattern of surreptitious data practices.” This comes after BuzzFeed News reported last week that TikTok’s staff in China had access to US-based users’ data up until January.",
            "Likes"         : "800",
            "id" : "1"
        },
        {
            "Title" : "Tesla lays off nearly 200 Autopilot workers, shutters San Mateo office",
            "CategoryName"  : "Technology",
            "PublishedDate" : "June 29, 2022",
            "ImageAsset"    : "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1238367308.jpg?w=430&h=230&crop=1",
            "BlogContent"   : "Tesla has gutted the data annotation team working on Autopilot, laying off nearly 200 employees and shutting down the San Mateo, California office where they worked. The layoffs, first reported by Bloomberg, have been confirmed by sources who talked to TechCrunch on condition of anonymity.",
            "Likes"         : "650",
            "id" : "2"
        },
        {
            "Title" : " Sniper Elite 5 Review – A Solid Sequel",
            "CategoryName"  : "Technology",
            "PublishedDate" : " JUNE 13, 2022",
            "ImageAsset"    : "https://wolfsgamingblog.files.wordpress.com/2022/06/se5_screenshots_wip_reveal_16_hotshot.jpg?w=300&h=200&crop=1",
            "BlogContent"   : "The world’s foremost socially distancing testicle surgeon is back to ensure there will never be any Nazi offspring. Yes, it’s Sniper Elite 5, a double-A series that has, over the years, somehow managed to sneak its way into my heart. Although they may be janky, there’s a charm and sense of fun to the Sniper Elite series that makes it hugely endearing.",
            "Likes"         : "700",
            "id" : "3"
        },
        {
            "Title" : " MotoGP 22 Review – Another Solid Game From Milestone",
            "CategoryName"  : "Technology",
            "PublishedDate" : " MAY 17, 2022 ",
            "ImageAsset"    : "https://wolfsgamingblog.files.wordpress.com/2022/05/motogp22-announcement-03-4k.png?w=300&h=200&crop=1",
            "BlogContent"   : "Milestone has created an interesting place for themselves in the racing market as purveyors of completely okay games. They lack the presentation and flair of Codemaster’s franchises or Microsoft’s Forza titles, and always seem to be on the precipice of greatness without ever quite reaching it.",
            "Likes"         : "900",
            "id" : "4"
        },
        {
            "Title" : " Teenage Mutant Ninja Turtles: Shredder’s Revenge Review – It’s Radical, Dudes!",
            "CategoryName"  : "Technology",
            "PublishedDate" : " JUNE 28, 2022",
            "ImageAsset"    : "https://wolfsgamingblog.files.wordpress.com/2022/06/teenage-mutant-ninja-turtles-shredders-revenge-news.jpg?w=300&h=200&crop=1",
            "BlogContent"   : "Teenage Mutant Ninja Turtles: Shredder’s Revenge is kind of like a remaster, remake and entirely new game, all at the same time. It takes stages, ideas and other elements from the classic TMNT arcade games and mashes them together with some modern sensibilities. It’s like asking the pizzeria to take all the possible toppings and throw them on the pizza.",
            "Likes"         : "422",
            "id" : "5"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : " Johnny Depp’s spokesperson clears the air on actor’s return to Pirates of the Caribbean franchise",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "JUNE 28, 2022 ",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/johny-depp.jpg?resize=450,250",
            "BlogContent"   : "Recently, there were reports claiming that Johnny Depp was going to sign a 301 million dollar deal to return to the Pirates of the Caribbean franchise.",
            "Likes"         : "800",
            "id" : "1"
        },
        {
            "Title" : "Christian Bale will return as Batman, only if Christopher Nolan directs: ‘If he wished to tell that story with me…’",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "JUNE 28, 2022 ",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/christian-bale-batman-1200.jpg",
            "BlogContent"   : "Christian Bale played Batman in Christopher Nolan directed The Dark Knight trilogy, which comprised of Batman Begins (2005), The Dark Knight (2008), and The Dark Knight Rises (2012).",
            "Likes"         : "800K",
            "id" : "2"
        },
        {
            "Title" : " From Chris Hemsworth’s audition to the evolution of Thor: Marvel traces the superhero’s 10-year legacy in special video",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "JUNE 28, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/thor-chris-hemsworth-1200.jpg?resize=450,250",
            "BlogContent"   : "Ahead of the release of Thor: Love and Thunder, Marvel Studios released a video tracing the journey of the superhero and showcasing Chris Hemsworth's dedication towards playing Thor in the MCU for past 10 years.",
            "Likes"         : "2M",
            "id" : "3"
        },
        {
            "Title" : " Johnny Depp-Amber Heard trial: Judge makes jury’s 10.3 million dollars award official",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "JUNE 26, 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/amber-heard-johny-depp.jpg?resize=450,250",
            "BlogContent"   : "Johnny Depp sued Amber Heard over a December 2018 op-ed she wrote in The Washington Post describing herself as “a public figure representing domestic abuse.”",
            "Likes"         : "800K",
            "id" : "4"
        },
        {
            "Title" : " Brad Pitt reveals he spent years with ‘low-grade depression’: ‘I always felt very alone in my life’",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "JUNE 23, 2022 ",
            "ImageAsset"    : "https://images.indianexpress.com/2022/06/BradPitt.jpeg?resize=450,250",
            "BlogContent"   : "Brad Pitt revealed in a new profile that he always felt 'alone in life', and that he became sober after his much-publicised split from Angelina Jolie.",
            "Likes"         : "1M",
            "id" : "5"
        }
       
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : " TRAINING TO FAILURE: 5 QUESTIONS YOU NEED TO ANSWER",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "JULY 26, 2021",
            "ImageAsset"    : "https://i1.wp.com/www.bornfitness.com/wp-content/uploads/2013/08/shutterstock_194099144-1.jpg?resize=670%2C404&ssl=1",
            "BlogContent"   : "Whatever your goal, the idea of seeking failure is misunderstood and misapplied, and a big reason why many people don’t see amazing results from their workouts.",
            "Likes"         : "800K",
            "id" : "1"
        },
        {
            "Title" : " The Definitive Guide On How To Build Big Arms",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "January 31, 2022",
            "ImageAsset"    : "https://breakingmuscle.com/wp-content/uploads/2022/01/BarBend-Article-Image-760-x-427-18.jpg",
            "BlogContent"   : "If you lift, then you probably want to look like you lift. And for many gym-goers, looking the part includes owning a pair of arms that put the seams of your sleeves to the test. Aesthetically, big arms are imposing and signal to others that you do indeed hoist iron. Functionally, bigger and stronger arms help you bench press, overhead press, and row more weight; they’re not just the end; they’re a means to another end (lots of strength).",
            "Likes"         : "1M+",
            "id" : "2"
        },
        {
            "Title" : " How to Do the Single-Arm Dumbbell Row for Bigger Lats",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "May 24, 2022",
            "ImageAsset"    : "https://breakingmuscle.com/wp-content/uploads/2022/05/shutterstock_1852369930-1-768x432.jpg",
            "BlogContent"   : "Back workouts will always require both vertical and horizontal pulling exercises for complete development. While pull-ups and pulldowns are common vertical pulls, one of the most fundamental horizontal pulling exercises is the single-arm dumbbell row.",
            "Likes"         : "800K",
            "id" : "3"
        },
        {
            "Title" : "How To Do The Triceps Pushdown For Bigger Arms",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "June 15, 2022",
            "ImageAsset"    : "https://breakingmuscle.com/wp-content/uploads/2022/06/shutterstock_2165620017.jpg",
            "BlogContent"   : "Got a cable machine? Then you’ve got access to one of the most fundamental exercises to directly target and isolate the triceps. The triceps pushdown, sometimes called a pressdown, is perfectly suited to beginners and experienced lifters alike.",
            "Likes"         : "1M",
            "id" : "4"
        },
        {
            "Title" : " The Best Triceps Workouts For Muscle, Strength, And More",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "June 14, 2022",
            "ImageAsset"    : "https://breakingmuscle.com/wp-content/uploads/2022/06/shutterstock_591929261.jpg",
            "BlogContent"   : "Ask 10 lifters to name the body part they’re training on any random day, and you’ll probably hear some familiar answers — chest, back, arms, biceps, maybe even legs. But very few will say they’re working triceps. There’s generic “arm day,” which includes the triceps. But they rarely get a spotlight, and that’s a mistake.",
            "Likes"         : "800K",
            "id" : "5"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : " The Science of Jello Shots",
            "CategoryName"  : "Food",
            "PublishedDate" : " Nov. 07, 2019",
            "ImageAsset"    : "https://www.seriouseats.com/thmb/mEjuFfNpCI2u7CD42pEcVOWfavQ=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__drinks.seriouseats.com__images__2014__01__20140127_Header-268c378568c245e5867f9b4b0fc461fe.jpg",
            "BlogContent"   : "Almost everyone has had a bad experience with those brightly colored jello shots synonymous with bad booze and worse ideas. But modern mixologists have reimagined these slurpable solids, creating new textures and beautiful presentations. Are they worth revisiting?",
            "Likes"         : "500k+",
            "id" : "1"
        },
        {
            "Title" : " All the Tea (Not) in China: The Story of How India Became a Tea-Drinking Nation",
            "CategoryName"  : "Food",
            "PublishedDate" : "Mar. 22, 2022",
            "ImageAsset"    : "https://www.seriouseats.com/thmb/V_6omuB2PtCwIBnz1RL2PnImlbU=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TeaInIndia-PriyaPaulCollectionHerocropped-96147c102900451193069b6d60e5dbe5.jpg",
            "BlogContent"   : "Tea is indisputably India's national drink. For many Indians, a typical day will begin with a cup of masala chai at home, followed by additional cups throughout the day from ubiquitous canteens and tea vendors. Commonly made by boiling tea leaves with milk and sugar along with ginger root and warm spices like cardamom and clove, India's masala chai has become one of the most famous brews in the world—so popular that, in many countries, the word “chai” (which simply means “tea” in Hindi) is synonymous with the Indian brewing style. ",
            "Likes"         : "1M+",
            "id" : "2"
        },
        {
            "Title" : " The Quest for 'Forbidden Nut Flavor'",
            "CategoryName"  : "Food",
            "PublishedDate" : " May. 02, 2022",
            "ImageAsset"    : "https://www.seriouseats.com/thmb/YH_PwUeFpnXHEFdzWBoDN_I15UY=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/No-Nut-Flavor-Final-9241933323b64df8a846b1c7f72c5736.jpg",
            "BlogContent"   : "On December 11, 2018, the United States Patent and Trademark Office granted Patent Number 10,150,935 for a seemingly wild new culinary technique. The patent outlines a procedure for running non-hydrogenated almond butter through a proprietary steam distillation process to yield a concentrated extract with the full, rich flavor of almond, but none of an almond's allergenic properties. This new flavoring agent would offer people with almond allergies the ability to “enjoy the desired and otherwise forbidden nut flavor,” the patent claims, not just imitations of it.",
            "Likes"         : "400K",
            "id" : "3"
        },
        {
            "Title" : " What Is 'Sushi-Grade,' Anyway? A Guide to Eating Raw Fish at Home",
            "CategoryName"  : "Food",
            "PublishedDate" : "Nov. 06, 2019",
            "ImageAsset"    : "https://www.seriouseats.com/thmb/e-n9Lc2MUXWg9EbdBVR3TJtFjnY=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__05__20170518-lobster-place-sashimi-vicky-wasik-2-32df7a0e2d5f4da184a29c33ea7bf8ba.jpg",
            "BlogContent"   : "Few foods can rival a sliver of raw fish, impeccably fresh and minimally adorned, whether it's perched atop a mound of sushi rice or swimming in a spicy citrus bath. And yet, despite the popularity of incredibly simple dishes like sushi, sashimi, crudo, poke, and tartares on restaurant menus, for many cooks, preparing raw fish at home remains a daunting task.",
            "Likes"         : "1M+",
            "id" : "4"
        },
        {
            "Title" : " Here's How We Stocked Our Kitchens for Self-Isolation",
            "CategoryName"  : "Food",
            "PublishedDate" : "Mar. 19, 2020",
            "ImageAsset"    : "https://www.seriouseats.com/thmb/SkRslX-2jssVbV41fmvR8XkThR8=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__08__20180810-chipwich-ice-cream-sandwiches-vicky-wasik-24-1a6d91e22f0c43988c1a702a0458bb2d.jpg",
            "BlogContent"   : "The Serious Eats team has been cooking even more often than usual these past few weeks—and that's saying something. As new Covid-19 preventative measures go into effect across the country, restaurants are closing their doors to keep both diners and staff safe. We’re to stay inside when we can, and to stay reasonably far from one another when we do need to poke our heads out for fresh air, or to pick up groceries.",
            "Likes"         : "708K",
            "id" : "5"
        }
    ]);

    return(
        <BlogContext.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </BlogContext.Provider>
    )
}