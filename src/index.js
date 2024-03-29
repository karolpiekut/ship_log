import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = `
<h1>ship_log</h1>
<hr>
<!--UPDATE BELOW-->
<h3>day_69</h3>
<h4>2024-01-23 13:44</h4>
<p>Poetry, prose or the language of machines. That's where the real battle is.</p>
<hr>
<h3>day_33</h3>
<h4>2023-12-18 13:44</h4>
<p>Need to find a better way to post. Also need a separate tab for the carnivore progress. Coding is not going as well as I hoped to. So far, I have managed to get this version published to GitHub pages, but in reality I am not sure whether I am even using the best tools for this. Need to look at React.</p>
<hr>
<h3>day_27</h3>
<h4>2023-12-12 22:07</h4>
<p>I have moved ship_log to my local Mac. I have decided that it needs to be build correctly using the best tools available. RaspberryPI seems alright, but it feels like a waste of time at the moment.</p>
<hr>
<h3>day_13</h3>
<h4>2023-11-28 13:15</h4>
<p>Struggled a bit to find enough time during my lunch break. It's like there is so much to figure out that coding takes a back seat.</p>
<hr>
<h3>day_9-12</h3>
<h4>2023-11-24 - 2023-11-27 backlog</h4>
<p>No updates.</p>
<hr>
<h3>day_8</h3>
<h4>2023-11-23 21:14</h4>
<p>
    I have managed to fix that damn bug. It looks like the movePlayer function call needs to be placed at the end of the
    update() section! I have only realised it after moving jump logic around the code.
</p>
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_7</h3>
<h4>2023-11-22 20:31</h4>
<p>
    I have found a bug, but I cannot figure it out yet. There is something wrong with the controls or the way the input
    from the keyboard is being read.
</p>
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_6</h3>
<h4>2023-11-21 backlog</h4>
<p>
    I came back to the Phaser book with a clean head. The setup is quite simple if you think about it. It's all about
    being smart and thinking what I am doing at every step. No zombie coding yet, I am not good enough to do that.
</p>
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_5</h3>
<h4>2023-11-20 backlog</h4>
<p>
    I have tried to go through the Phaser book. No success. I have screwed up the setup by removing the binary file.
</p>
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_4</h3>
<h4>2023-11-19 15:36</h4>
<p>
    Sunday - late afternoon. I have just finished Phaser tutorial. Creating my first game was quite fun, although
    roughly three quarters in, I have lost interest and stared a copy and paste process like a zombie. Tomorrow I am
    planning to go through GameMaker tutorial. That's a proper game engine, where coding is a bit limited. At least in
    the GameMaker's instance. I am not completely dismissing Phaser, it's just I am not sure how much is actually
    possible. I have found a guide on how to create a fog of war, who knows, maybe my lack of understanding is the
    villain. Will see tomorrow.
</p>

<h4>21:40</h4>
<p>I have just finished another phaser tutorial. I am pretty sure that the direction that I am heading is correct. I
    have no t tried GameMaker yet, but something pulling me toward this monitor to look at Phaser. Will se what
    comes out of it. </p>
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_3</h3>
<h4>2023-11-18 10:37</h4>
<p>
    Saturday morning. Need to get up and get that damn haircut. There are other things that I have not completed, but I
    don't rea lly feel like getting up right now. I have tasked myself with finishing Alan Wake DLCs. Once they are
    done, I will attempt t o finish American Nightmare tomorrow, then Control and then maybe, I will try Alan Wake 2.
    <br>
    Once laziness is out of my system, the plan is to go through the Phaser tutorials.<br>I have just realised that I am
    doing i t again. Instead of making notes after I do things, I am wasting time on planning.
</p>
<h4>14:35</h4>
I got to get up and get going. There are so many things that I need to complete, and yet I am sitting on my arse, trying
to f ind an ounce of will to start going.
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_2</h3>
<h4>2023-11-17 time_unknown</h4>
<p>No updates.</p>
<hr>
<!-- -------------------------------------------------------------------------------->
<h3>day_1</h3>
<h4>2023-11-16 21:42</h4>
<p>
    I have just finished playing with the Apache server. There were multiple issues that I needed to tackle, but I
    have ended up victorious. Miracles can happen if you are not rushing things. If you just agree that not
    everything is perfect, and you can't do everything today. I look forward to see another day, to see where this
    journey will take me.
</p>
<h4>22:38</h4>
<p>Without any pressure, I find learning about coding more relaxing. It's not a chore anymore. It's like a game,
    where you a re-trying to figure out how things work. To be fair, I did not code much yet. Today was about setup.
    Learning Linux commands , how permissions work, Apache and SSH keys. I actually , had so much fun, that I forgot
    to switch on TV after work. It's getting late. Time to set sails for bed.
</p>
<hr>
        <footer>
        <p id="footer-font">ship_log est.2023</p>
</footer>`;
    return element;
}

document.body.appendChild(component());