import React, { useRef,useState } from 'react';



    const DivRef = () => {
      const divRef = useRef(null);
      const [isScrolled, setIsScrolled] = useState(false);
    
      const handleScrollIntoDiv = () => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
        setIsScrolled(true);
    
        // Reset the scroll indicator after 2 seconds
        setTimeout(() => {
          setIsScrolled(false);
        }, 2000);
      };
    
      return (
        <div>
          <button onClick={handleScrollIntoDiv}>Scroll Into Div</button>
          <div
            className={`scrollable-div ${isScrolled ? 'scrolled' : ''}`}
            ref={divRef}
          >
                <ul>
        <li>Apple</li>
        <li>Apricot</li>
        <li>Avocado</li>
        <li>Banana</li>
        <li>Blackberry</li>
        <li>Blueberry</li>
        <li>Boysenberry</li>
        <li>Cherry</li>
        <li>Clementine</li>
        <li>Coconut</li>
        <li>Cranberry</li>
        <li>Dragonfruit</li>
        <li>Durian</li>
        <li>Elderberry</li>
        <li>Fig</li>
        <li>Grape</li>
        <li>Grapefruit</li>
        <li>Guava</li>
        <li>Honeydew</li>
        <li>Jackfruit</li>
        <li>Jujube</li>
        <li>Kiwi</li>
        <li>Kumquat</li>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Lingonberry</li>
        <li>Lychee</li>
        <li>Mango</li>
        <li>Marionberry</li>
        <li>Melon</li>
        <li>Mulberry</li>
        <li>Nectarine</li>
        <li>Orange</li>
        <li>Papaya</li>
        <li>Peach</li>
        <li>Pear</li>
        <li>Persimmon</li>
        <li>Pineapple</li>
        <li>Plum</li>
        <li>Pomegranate</li>
        <li>Raspberry</li>
        <li>Strawberry</li>
        <li>Tangerine</li>
        <li>Watermelon</li>
        <li>Acai berry</li>
        <li>Ackee</li>
        <li>Amla (Indian Gooseberry)</li>
        <li>Barberry</li>
        <li>Blackcurrant</li>
        <li>Black sapote</li>
        <li>Blueberry</li>
        <li>Boquila</li>
        <li>Breadfruit</li>
        <li>Buddha's hand</li>
        <li>Cactoid cactoid cactus</li>
        <li>Canistel</li>
        <li>Carob</li>
        <li>Chayote</li>
        <li>Cherimoya</li>
        <li>Cloudberry</li>
        <li>Cocoa bean</li>
        <li>Coconut</li>
        <li>Cornelian cherry</li>
        <li>Cranberry</li>
        <li>Currant</li>
        <li>Damson</li>
        <li>Date</li>
        <li>Desert lime</li>
        <li>Dewberry</li>
        <li>Drumstick</li>
        <li>Feijoa</li>
        <li>Finger lime</li>
        <li>Genip</li>
        <li>Goji berry</li>
        <li>Gooseberry</li>
        <li>Goumi</li>
        <li>Grumichama</li>
</ul>
          </div>
        </div>
      );
    };
    
    export default DivRef;
    
