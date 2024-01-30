// popup effect when meal plan button is clicked
    const buttons = document.querySelectorAll('.button');
    const popupContainer = document.getElementById('popupContainer');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');
    const popupImage = popup.querySelector('img');
    const popupParagraph = popup.querySelector('p');
  
    const popupData = [
      {
        image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        message: ' A nutritious breakfast is vital for a great start. Try a hearty bowl of oatmeal topped with sliced bananas, chia seeds, and a dollop of almond butter. For a protein-rich option, whip up a veggie-packed scrambled egg and spinach wrap using a whole-grain tortilla. Greek yogurt with mixed berries, honey, and a sprinkle of granola offers a balance of protein and antioxidants. For a grab-and-go choice, prepare overnight oats with almond milk, nuts, and dried fruits. ',
      },
      {
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        message: 'A nutritious lunch, consider a grilled chicken salad loaded with mixed greens, colorful vegetables, and a drizzle of olive oil vinaigrette. Another option is a quinoa and black bean bowl with roasted vegetables and a sprinkle of feta cheese. Alternatively, opt for a whole-grain wrap filled with lean turkey, hummus, and plenty of crunchy veggies. These choices offer a combination of protein, fiber, and essential nutrients to keep you fueled throughout the afternoon..',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/11/19/09/42/berries-1838314_640.jpg',
        message: 'When it comes to nutritious snacks, there are plenty of options. Reach for a handful of mixed nuts, like almonds, walnuts, and pistachios, for a dose of healthy fats and protein. Opt for carrot and cucumber sticks with hummus for a satisfying crunch and a boost of fiber. Greek yogurt with a sprinkle of granola and berries offers a protein-rich and probiotic-packed snack. For a sweet treat, try apple slices with a smear of natural peanut butter. Lastly, whole-grain rice cakes topped with avocado and a sprinkle of sea salt provide a balance of carbs and healthy fats.',
      },
      {
        image: 'https://images.pexels.com/photos/2532005/pexels-photo-2532005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        message: 'Indulge in a baked salmon fillet accompanied by a quinoa salad bursting with colorful vegetables, supplying omega-3s, protein, and fiber. Savor a plant-based delight—grilled portobello mushrooms topped with a blend of sautéed spinach, quinoa, and diced tomatoes—a harmony of flavors, vitamins, and antioxidants. For a protein-rich option, relish lean turkey meatballs served over whole-grain pasta with marinara sauce and a side of steamed broccoli. These dinner selections combine lean proteins, wholesome grains.',
      },
    ];
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        popupImage.src = popupData[index].image;
        popupParagraph.textContent = popupData[index].message;
        popupContainer.style.display = 'flex';
      });
    });
  
    closeButton.addEventListener('click', () => {
      popupContainer.style.display = 'none';
    });



//  popup effect when tips button is clicked
  const customButtons = document.querySelectorAll('.custom-button');
  const customPopupContainer = document.getElementById('customPopupContainer');
  const customPopup = document.getElementById('customPopup');
  const customCloseButton = document.getElementById('customCloseButton');
  const customPopupContent = document.getElementById('customPopupContent');
  const customPopupParagraph = customPopupContent.querySelector('p');

  const customPopupData = [
    'Embarking on my yoga journey introduced me to a realm of energy techniques that have revolutionized my life. Breathwork, like Pranayama, has been my sanctuary, allowing me to harness the power of each inhale and exhale to balance my energy and find calm amidst chaos. The practice of Kundalini yoga awakened dormant vitality within me, guiding transformative energy through my chakras. Sun Salutations, a dynamic sequence, infuse me with a surge of morning energy, while Yin yoga deep stretches dissolve tension, liberating energy blockages. Guided by these techniques, my yoga practice has become a conduit for invigorating, transformative energy, permeating every facet of my existence.',


    'Navigating food struggles can be complex. Firstly, emotional eating might be triggering poor choices as a response to stress or emotions. Secondly, lack of awareness about portion control and balanced nutrition can lead to overconsumption of unhealthy foods. Lastly, societal pressures and fad diets may fuel unrealistic expectations, causing guilt and unhealthy relationships with food. Addressing these aspects with mindfulness, education, and self-compassion can pave the way to a healthier and more harmonious relationship with food.',


    'Dieting with severe calorie restriction or repeated crash diets can indeed slow down your metabolism. Drastic reductions in calorie intake signal the body to conserve energy, leading to a decrease in basal metabolic rate. This can make it harder to lose weight in the long run and easier to regain lost weight. Additionally, nutrient deficiencies from extreme diets can impact overall health and metabolism. Instead of restrictive dieting, focus on balanced, sustainable eating habits and regular physical activity to support a healthier metabolism and overall well-being.',


    'Indulge in delicious gluten-free cookies with these simple and wholesome recipes. Try almond flour chocolate chip cookies for a chewy delight or opt for oatmeal raisin cookies using gluten-free oats, almond butter, and honey. Coconut macaroons offer a sweet treat made from shredded coconut, egg whites, and a touch of honey. For a nutrient boost, whip up banana peanut butter cookies with mashed bananas and oats. Experiment with chickpea flour snickerdoodles, zucchini chocolate cookies, and customizable trail mix cookies using oats, nuts, dried fruits, and honey. These gluten-free options satisfy your cravings while keeping things healthy and flavorful.',


    'Beta-carotene, a powerful antioxidant and precursor to vitamin A, offers a range of health benefits when included in your diet. Firstly, it supports vision health by promoting good eyesight and reducing the risk of age-related macular degeneration. Secondly, beta-carotene bolsters the immune system, helping the body fend off infections and illnesses. Additionally, it contributes to skin health, promoting a vibrant complexion and potentially offering protection against UV damage. Incorporating beta-carotene-rich foods like sweet potatoes, carrots, spinach, and kale can also aid in maintaining healthy bones and supporting overall cell function. By enjoying these foods, you are harnessing the potential of beta-carotene to enhance your well-being from the inside out.',


    'The amount of food you need each day varies based on factors like age, gender, activity level, and individual metabolism. A general guideline is to follow recommended daily intake values: about 2,000 to 2,500 calories for an average adult. This translates to approximately 3 balanced meals and 1-2 snacks. Aim for a diverse diet including fruits, vegetables, lean proteins, whole grains, and healthy fats. Remember, quality matters more than quantity. Listen to your body hunger and fullness cues to find the right portion sizes for you. Consulting a registered dietitian can provide personalized guidance tailored to your needs.',
  ];

  customButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      customPopupParagraph.textContent = customPopupData[index];
      customPopupContainer.style.display = 'flex';
    });
  });

  customPopupContainer.addEventListener('click', (event) => {
    if (event.target === customPopupContainer) {
      customPopupContainer.style.display = 'none';
    }
  });

  customCloseButton.addEventListener('click', () => {
    customPopupContainer.style.display = 'none';
  });
