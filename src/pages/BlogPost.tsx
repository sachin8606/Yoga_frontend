import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API or CMS
  const blogPosts = {
    'eight-limbs-of-yoga': {
      id: 1,
      title: 'The Sacred Journey: Understanding the Eight Limbs of Yoga',
      content: `
        <p>The ancient sage Patanjali gifted humanity with one of the most profound spiritual frameworks ever conceived: the eight limbs of yoga, or Ashtanga. Far beyond the physical postures we often associate with yoga today, this sacred path offers a complete guide for living a meaningful, purposeful life.</p>

        <h2>The Foundation: Yamas and Niyamas</h2>
        
        <p>The journey begins with the <strong>Yamas</strong> - ethical restraints that guide our interactions with the world:</p>
        
        <ul>
          <li><strong>Ahimsa (Non-violence):</strong> Extending compassion to all beings, including ourselves</li>
          <li><strong>Satya (Truthfulness):</strong> Living authentically and speaking our truth</li>
          <li><strong>Asteya (Non-stealing):</strong> Taking only what we need and giving back to the world</li>
          <li><strong>Brahmacharya (Energy conservation):</strong> Using our vital energy wisely</li>
          <li><strong>Aparigraha (Non-possessiveness):</strong> Finding contentment without attachment</li>
        </ul>

        <p>The <strong>Niyamas</strong> are positive observances that cultivate inner discipline:</p>
        
        <ul>
          <li><strong>Saucha (Cleanliness):</strong> Purifying body, mind, and environment</li>
          <li><strong>Santosha (Contentment):</strong> Finding joy in the present moment</li>
          <li><strong>Tapas (Disciplined practice):</strong> Cultivating inner fire and determination</li>
          <li><strong>Svadhyaya (Self-study):</strong> Continuous learning and self-reflection</li>
          <li><strong>Ishvara Pranidhana (Surrender):</strong> Offering our actions to the divine</li>
        </ul>

        <h2>The Physical Practice: Asana</h2>
        
        <p>The third limb, <strong>Asana</strong>, refers to the physical postures. While modern yoga often focuses primarily on this aspect, Patanjali's original intention was to prepare the body for meditation. A steady, comfortable seat allows the mind to transcend physical distractions and dive deeper into spiritual practice.</p>

        <h2>The Breath Bridge: Pranayama</h2>
        
        <p><strong>Pranayama</strong>, the fourth limb, literally means "extension of life force." Through conscious breathing practices, we learn to harness and direct our vital energy, creating a bridge between the physical and subtle aspects of our being.</p>

        <h2>Turning Inward: Pratyahara</h2>
        
        <p>The fifth limb, <strong>Pratyahara</strong>, involves withdrawing the senses from external distractions. Like a turtle drawing its limbs into its shell, we learn to turn our attention inward, preparing for the deeper stages of meditation.</p>

        <h2>The Meditative Limbs</h2>
        
        <p>The final three limbs form the core of meditative practice:</p>
        
        <p><strong>Dharana (Concentration):</strong> Focusing the mind on a single point or object</p>
        <p><strong>Dhyana (Meditation):</strong> Sustained, effortless awareness</p>
        <p><strong>Samadhi (Union):</strong> The ultimate goal - complete absorption and unity with the divine</p>

        <h2>Living the Eight Limbs</h2>
        
        <p>The beauty of this ancient system lies not in perfecting each limb individually, but in understanding how they weave together to create a tapestry of conscious living. Each limb supports and enhances the others, creating a holistic approach to spiritual growth.</p>

        <p>As you walk this sacred path, remember that it's not about achieving perfection, but about cultivating awareness, compassion, and connection - with yourself, others, and the divine essence that unites us all.</p>

        <blockquote>
          "Yoga is not about touching your toes. It is about what you learn on the way down." - Judith Hanson Lasater
        </blockquote>
      `,
      author: 'Swami Ananda',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Philosophy',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      tags: ['Philosophy', 'Eight Limbs', 'Patanjali', 'Spiritual Practice', 'Meditation']
    },
    'pranayama-science-of-breath': {
      id: 2,
      title: 'Pranayama: The Science of Breath and Life Force',
      content: `
        <p>In the ancient wisdom of yoga, breath is far more than a biological function - it's the bridge between body and mind, the carrier of life force, and the key to expanded consciousness. Pranayama, literally meaning "extension of life force," offers us powerful techniques to harness this vital energy.</p>

        <h2>Understanding Prana</h2>
        
        <p><strong>Prana</strong> is the subtle energy that animates all life. While we often think of it as breath, prana is actually the life force that breath carries. Through pranayama practices, we learn to direct and refine this energy, creating profound shifts in our physical, mental, and spiritual well-being.</p>

        <h2>The Five Pranas</h2>
        
        <p>Yogic science recognizes five main types of prana, each governing different bodily functions:</p>
        
        <ul>
          <li><strong>Prana:</strong> Located in the heart and lungs, governing breathing and circulation</li>
          <li><strong>Apana:</strong> Centered in the pelvis, controlling elimination and reproduction</li>
          <li><strong>Samana:</strong> Residing in the solar plexus, managing digestion and metabolism</li>
          <li><strong>Udana:</strong> Found in the throat and head, governing speech and expression</li>
          <li><strong>Vyana:</strong> Pervading the entire body, coordinating all other pranas</li>
        </ul>

        <h2>Fundamental Pranayama Techniques</h2>
        
        <h3>1. Ujjayi Pranayama (Ocean Breath)</h3>
        <p>This foundational technique involves breathing through the nose while gently constricting the throat, creating a soft ocean-like sound. Ujjayi breath calms the nervous system and enhances concentration.</p>

        <h3>2. Nadi Shodhana (Alternate Nostril Breathing)</h3>
        <p>This balancing practice purifies the subtle energy channels (nadis) and harmonizes the left and right hemispheres of the brain. It's particularly effective for reducing stress and improving mental clarity.</p>

        <h3>3. Kapalabhati (Skull Shining Breath)</h3>
        <p>A dynamic breathing technique that involves rapid, forceful exhalations followed by passive inhalations. Kapalabhati energizes the system, purifies the blood, and strengthens the core.</p>

        <h3>4. Bhramari (Bee Breath)</h3>
        <p>By creating a humming sound during exhalation, this practice soothes the nervous system and prepares the mind for meditation. The vibrations have a deeply calming effect on the brain.</p>

        <h2>The Science Behind the Practice</h2>
        
        <p>Modern research confirms what yogis have known for millennia - controlled breathing practices have profound physiological effects:</p>
        
        <ul>
          <li>Activates the parasympathetic nervous system, promoting relaxation</li>
          <li>Reduces cortisol levels and stress hormones</li>
          <li>Improves heart rate variability</li>
          <li>Enhances focus and cognitive function</li>
          <li>Boosts immune system function</li>
        </ul>

        <h2>Beginning Your Practice</h2>
        
        <p>Start slowly and listen to your body. Begin with simple techniques like natural breath observation before progressing to more advanced practices. Consistency is more important than intensity - even five minutes of daily pranayama can create significant benefits.</p>

        <p>Remember, the breath is always with you, making pranayama one of the most accessible forms of yoga practice. Whether you're seeking stress relief, enhanced energy, or deeper spiritual connection, the ancient art of conscious breathing offers a direct path to transformation.</p>

        <blockquote>
          "When the breath wanders, the mind also is unsteady. But when the breath is calmed, the mind too will be still." - Hatha Yoga Pradipika
        </blockquote>
      `,
      author: 'Guru Priya',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Practice',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=400&fit=crop',
      tags: ['Pranayama', 'Breathing', 'Life Force', 'Meditation', 'Energy Work']
    },
    'living-in-rishikesh': {
      id: 3,
      title: 'Living in Rishikesh: A Spiritual Awakening',
      content: `
        <p>Nestled in the foothills of the Himalayas, where the sacred Ganges flows with divine grace, Rishikesh stands as a beacon of spiritual awakening. Known as the "Yoga Capital of the World," this ancient city offers more than just a destination - it provides a transformative journey that touches the very core of one's being.</p>

        <h2>The Sacred Geography</h2>
        
        <p>Rishikesh is blessed with a unique geographical position that enhances its spiritual energy. The confluence of the Ganges and the Himalayan foothills creates a natural amphitheater of divine vibrations. The crisp mountain air, the sound of flowing water, and the sight of snow-capped peaks all contribute to an environment conducive to inner reflection and spiritual growth.</p>

        <h2>Daily Rhythms of Spiritual Life</h2>
        
        <p>Life in Rishikesh follows the natural rhythms that our ancestors honored. The day begins before dawn with the melodious sounds of temple bells and morning prayers echoing across the valley. As the sun rises over the Himalayas, painting the sky in hues of gold and pink, the city awakens to a symphony of spiritual practice.</p>

        <h3>Morning Sadhana</h3>
        <p>The early hours are considered the most auspicious for spiritual practice. Students gather on rooftops and riverbanks for morning meditation, pranayama, and asana practice. The cool morning air and the absence of worldly distractions create the perfect environment for deepening one's practice.</p>

        <h3>Satsang and Community</h3>
        <p>Evenings bring the community together for satsang - spiritual discourse and chanting. These gatherings foster a sense of unity and shared purpose among seekers from around the world. The power of collective meditation and chanting creates an atmosphere of profound peace and connection.</p>

        <h2>The Ashram Experience</h2>
        
        <p>Living in an ashram in Rishikesh offers a unique opportunity to experience traditional yogic lifestyle. The structured routine, simple vegetarian meals, and community living help practitioners develop discipline, humility, and inner strength.</p>

        <ul>
          <li><strong>Simplicity:</strong> Life is stripped down to essentials, allowing focus on spiritual growth</li>
          <li><strong>Service (Seva):</strong> Daily service activities cultivate selflessness and devotion</li>
          <li><strong>Study (Svadhyaya):</strong> Regular study of sacred texts deepens understanding</li>
          <li><strong>Silence:</strong> Periods of noble silence enhance introspection and inner listening</li>
        </ul>

        <h2>Sacred Sites and Practices</h2>
        
        <p>Rishikesh is dotted with ancient temples, sacred ghats, and meditation caves that have been sanctified by centuries of spiritual practice. Each location carries its own unique energy and offers different opportunities for spiritual exploration.</p>

        <h3>Ganga Aarti</h3>
        <p>The evening Ganga Aarti (river worship ceremony) at Triveni Ghat is a deeply moving experience. As hundreds of oil lamps float on the sacred waters, the entire atmosphere becomes charged with devotion and reverence. This daily ritual connects participants with the divine feminine energy of the river and the cosmic consciousness it represents.</p>

        <h2>Challenges and Growth</h2>
        
        <p>Living in Rishikesh is not without its challenges. The intensity of spiritual energy can bring up deep-seated emotions and patterns that need healing. The simple living conditions test one's attachment to material comforts. However, these very challenges become catalysts for profound personal transformation.</p>

        <p>Many students find that their preconceptions about life, success, and happiness are challenged and ultimately transformed. The focus shifts from external achievements to inner development, from having to being, from seeking to surrendering.</p>

        <h2>Integration and Return</h2>
        
        <p>The true test of the Rishikesh experience comes when students return to their regular lives. The practices, insights, and transformations experienced in this sacred space must be integrated into daily living. Many find that they carry a piece of Rishikesh's peace and wisdom with them wherever they go.</p>

        <blockquote>
          "Rishikesh doesn't just change your practice; it changes your perspective on life itself. You come seeking yoga and leave with a new understanding of your place in the universe."
        </blockquote>

        <h2>A Lifetime Connection</h2>
        
        <p>For most who spend time in Rishikesh, the connection formed with this sacred land is lifelong. Many return year after year, drawn by the transformative energy and the community of fellow seekers. Others carry the essence of Rishikesh into their teaching and sharing, spreading its wisdom far and wide.</p>

        <p>Whether you come for a short retreat or an extended stay, Rishikesh offers the opportunity to reconnect with your authentic self, to remember your true nature, and to experience the profound peace that comes from alignment with the divine flow of existence.</p>
      `,
      author: 'Sarah Mitchell',
      date: 'March 5, 2024',
      readTime: '10 min read',
      category: 'Experience',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      tags: ['Rishikesh', 'Spiritual Journey', 'Ashram Life', 'Transformation', 'Sacred Places']
    },
    'meditation-for-beginners': {
      id: 4,
      title: 'Meditation for Beginners: Finding Peace Within',
      content: `
        <p>In our fast-paced world filled with constant stimulation and endless distractions, the ancient practice of meditation offers a sanctuary of peace and clarity. For beginners, meditation might seem mysterious or challenging, but it's actually one of the most natural and accessible practices for cultivating inner harmony.</p>

        <h2>What is Meditation?</h2>
        
        <p>At its essence, meditation is the practice of training the mind to achieve a state of focused awareness and emotional calm. Unlike what many believe, meditation is not about emptying the mind or stopping thoughts entirely. Rather, it's about developing a different relationship with your thoughts - observing them without judgment and returning to a chosen point of focus.</p>

        <h2>Benefits of Regular Practice</h2>
        
        <p>Scientific research has validated what meditators have known for millennia - regular meditation practice offers profound benefits for both mental and physical health:</p>

        <ul>
          <li><strong>Stress Reduction:</strong> Lowers cortisol levels and activates the relaxation response</li>
          <li><strong>Improved Focus:</strong> Enhances attention span and cognitive flexibility</li>
          <li><strong>Emotional Regulation:</strong> Develops greater emotional stability and resilience</li>
          <li><strong>Better Sleep:</strong> Promotes deeper, more restful sleep patterns</li>
          <li><strong>Physical Health:</strong> Reduces blood pressure and supports immune function</li>
          <li><strong>Increased Self-Awareness:</strong> Develops deeper understanding of thoughts and behaviors</li>
        </ul>

        <h2>Simple Techniques for Beginners</h2>
        
        <h3>1. Breath Awareness Meditation</h3>
        <p>This foundational practice involves simply observing your natural breath:</p>
        <ul>
          <li>Sit comfortably with your spine straight</li>
          <li>Close your eyes or soften your gaze</li>
          <li>Notice the sensation of breathing without trying to change it</li>
          <li>When your mind wanders, gently return attention to the breath</li>
          <li>Start with 5-10 minutes daily</li>
        </ul>

        <h3>2. Body Scan Meditation</h3>
        <p>This practice cultivates awareness of physical sensations:</p>
        <ul>
          <li>Lie down comfortably or sit in a chair</li>
          <li>Starting from your toes, slowly scan each part of your body</li>
          <li>Notice any sensations without trying to change them</li>
          <li>Move systematically from toes to the top of your head</li>
          <li>Practice for 10-20 minutes</li>
        </ul>

        <h3>3. Loving-Kindness Meditation</h3>
        <p>This heart-opening practice cultivates compassion:</p>
        <ul>
          <li>Begin by sending loving wishes to yourself</li>
          <li>Extend these wishes to loved ones</li>
          <li>Include neutral people, then difficult people</li>
          <li>Finally, send love to all beings everywhere</li>
          <li>Use phrases like "May you be happy, may you be peaceful"</li>
        </ul>

        <h2>Creating Your Practice Space</h2>
        
        <p>While you can meditate anywhere, having a dedicated space can enhance your practice:</p>
        
        <ul>
          <li><strong>Choose a quiet corner:</strong> Find a space with minimal distractions</li>
          <li><strong>Keep it simple:</strong> A cushion or chair is all you need</li>
          <li><strong>Add meaningful objects:</strong> Candles, crystals, or images that inspire peace</li>
          <li><strong>Maintain consistency:</strong> Use the same space regularly to build habit</li>
        </ul>

        <h2>Common Challenges and Solutions</h2>
        
        <h3>"My mind is too busy"</h3>
        <p>This is the most common concern for beginners. Remember, having thoughts during meditation is completely normal. The practice is not about stopping thoughts but noticing when you're caught up in them and gently returning to your focus point.</p>

        <h3>"I don't have time"</h3>
        <p>Start with just 5 minutes a day. Consistency is more important than duration. You can gradually increase the time as the habit becomes established.</p>

        <h3>"I fall asleep"</h3>
        <p>Try meditating with your eyes slightly open, sit rather than lie down, or practice at a different time of day when you're more alert.</p>

        <h3>"I'm not doing it right"</h3>
        <p>There's no "perfect" meditation. If you're showing up and making the effort to practice, you're doing it right. Be patient and compassionate with yourself.</p>

        <h2>Building a Sustainable Practice</h2>
        
        <p>The key to successful meditation is consistency rather than perfection:</p>
        
        <ul>
          <li><strong>Start small:</strong> Begin with 5-10 minutes daily</li>
          <li><strong>Choose a regular time:</strong> Morning or evening works well for most people</li>
          <li><strong>Use guided meditations:</strong> Apps and online resources can provide structure</li>
          <li><strong>Join a group:</strong> Community support can enhance motivation</li>
          <li><strong>Track your practice:</strong> Keep a simple journal of your experiences</li>
        </ul>

        <h2>Deepening Your Understanding</h2>
        
        <p>As you develop your practice, consider exploring different meditation traditions and techniques. Each approach offers unique insights and benefits. Whether you're drawn to mindfulness meditation, transcendental meditation, or contemplative practices, the key is finding what resonates with you.</p>

        <p>Remember, meditation is not a destination but a journey. Each moment of practice, whether peaceful or challenging, is an opportunity for growth and self-discovery. Be patient with yourself, celebrate small victories, and trust in the transformative power of this ancient practice.</p>

        <blockquote>
          "Meditation is not about becoming a different person, a new person, or even a better person. It's about training in awareness and getting a healthy sense of perspective." - Jon Kabat-Zinn
        </blockquote>
      `,
      author: 'Yogi Ramesh',
      date: 'February 28, 2024',
      readTime: '5 min read',
      category: 'Meditation',
      image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&h=400&fit=crop',
      tags: ['Meditation', 'Mindfulness', 'Beginners Guide', 'Inner Peace', 'Stress Relief']
    },
    'yoga-teacher-training-guide': {
      id: 5,
      title: 'Yoga Teacher Training: What to Expect',
      content: `
        <p>Embarking on a yoga teacher training journey is one of the most transformative experiences you can undertake. Whether you're looking to deepen your personal practice, share yoga with others, or embark on a complete career change, teacher training offers profound opportunities for growth, learning, and self-discovery.</p>

        <h2>Why Pursue Yoga Teacher Training?</h2>
        
        <p>Many students come to teacher training with different motivations:</p>
        
        <ul>
          <li><strong>Deepen Personal Practice:</strong> Intensive study enhances your understanding of yoga philosophy, anatomy, and technique</li>
          <li><strong>Share Your Passion:</strong> Learn to guide others safely and effectively through their yoga journey</li>
          <li><strong>Personal Transformation:</strong> Experience profound shifts in perspective, confidence, and self-awareness</li>
          <li><strong>Career Change:</strong> Transition into a meaningful profession that aligns with your values</li>
        </ul>

        <h2>What to Expect During Training</h2>
        
        <p>A typical day in residential teacher training includes morning meditation, asana practice, philosophy study, anatomy lessons, and teaching practice. The experience is both challenging and deeply rewarding.</p>

        <h2>Preparing for Your Training</h2>
        
        <ul>
          <li>Establish a regular practice 2-3 months before training</li>
          <li>Set clear intentions for your training</li>
          <li>Be open to vulnerability and growth</li>
          <li>Prepare financially for the investment</li>
        </ul>

        <blockquote>
          "Teacher training doesn't just teach you how to teach yoga; it teaches you how to live yoga. The real transformation happens not in mastering the poses, but in embodying the practice."
        </blockquote>

        <p>Remember, becoming a yoga teacher is not about perfection—it's about authenticity, continuous learning, and serving others with humility and compassion.</p>
      `,
      author: 'Anita Sharma',
      date: 'February 20, 2024',
      readTime: '12 min read',
      category: 'Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      tags: ['Teacher Training', 'YTT', 'Career', 'Personal Growth', 'Yoga Education']
    },
    'ayurveda-and-yoga': {
      id: 6,
      title: 'Ayurveda and Yoga: The Perfect Union',
      content: `
        <p>Ayurveda and Yoga are sister sciences that originated in ancient India, both designed to promote health, happiness, and spiritual growth. Together, they create a comprehensive approach to holistic well-being.</p>

        <h2>Understanding Ayurveda</h2>
        
        <p>Ayurveda, literally meaning "science of life," is a 5,000-year-old system of natural healing that emphasizes prevention and treatment through lifestyle practices, dietary guidelines, and herbal remedies.</p>

        <h2>The Three Doshas</h2>
        
        <p>Central to Ayurvedic philosophy are the three doshas - biological energies that govern all physical and mental processes:</p>

        <ul>
          <li><strong>Vata (Air + Space):</strong> Governs movement, circulation, and nervous system</li>
          <li><strong>Pitta (Fire + Water):</strong> Controls metabolism, digestion, and intelligence</li>
          <li><strong>Kapha (Earth + Water):</strong> Provides structure, lubrication, and immunity</li>
        </ul>

        <h2>How Yoga Supports Ayurvedic Healing</h2>
        
        <p>Yoga practices can be tailored to balance specific doshas:</p>
        
        <ul>
          <li><strong>For Vata:</strong> Slow, grounding practices like Hatha yoga</li>
          <li><strong>For Pitta:</strong> Cooling practices, avoid heated environments</li>
          <li><strong>For Kapha:</strong> Dynamic practices like Vinyasa or Ashtanga</li>
        </ul>

        <blockquote>
          "Ayurveda teaches us how to live in harmony with our nature, while yoga shows us how to transcend our limitations. Together, they offer a complete path to physical health, mental clarity, and spiritual awakening."
        </blockquote>

        <p>By understanding and applying the principles of both Ayurveda and yoga, we can create a personalized path to optimal health that honors our individual nature while supporting our spiritual evolution.</p>
      `,
      author: 'Dr. Vikash Gupta',
      date: 'February 15, 2024',
      readTime: '9 min read',
      category: 'Ayurveda',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=400&fit=crop',
      tags: ['Ayurveda', 'Holistic Health', 'Doshas', 'Nutrition', 'Lifestyle Medicine']
    },
    'sacred-mantras-sound-healing': {
      id: 7,
      title: 'Sacred Mantras: The Power of Sound Healing',
      content: `
        <p>Mantras are sacred sounds, words, or phrases that carry spiritual power and transformative energy. Rooted in ancient Sanskrit traditions, these vibrational tools have been used for thousands of years to focus the mind, open the heart, and connect with divine consciousness.</p>

        <h2>The Science of Sound</h2>
        
        <p>Modern science confirms what ancient yogis knew: sound has profound effects on our physical, mental, and emotional well-being. When we chant mantras, we create vibrations that:</p>
        
        <ul>
          <li>Activate the vagus nerve, promoting relaxation</li>
          <li>Synchronize brain waves for deeper meditation states</li>
          <li>Release endorphins and reduce stress hormones</li>
          <li>Improve focus and mental clarity</li>
        </ul>

        <h2>Popular Mantras and Their Meanings</h2>
        
        <h3>Om (AUM)</h3>
        <p>The primordial sound of creation, representing the unity of all existence. Chanting Om connects us to the cosmic vibration and brings inner peace.</p>

        <h3>Om Mani Padme Hum</h3>
        <p>A Tibetan mantra meaning "the jewel in the lotus," invoking compassion and wisdom. This mantra purifies negative emotions and cultivates loving-kindness.</p>

        <h3>So Hum</h3>
        <p>Meaning "I am that," this mantra connects us to our true nature and universal consciousness. It's often synchronized with the breath.</p>

        <h3>Gayatri Mantra</h3>
        <p>A powerful Vedic mantra that invokes divine light and wisdom: "Om Bhur Bhuvaḥ Swaḥ, Tat-savitur Vareñyaṃ, Bhargo Devasya Dhīmahi, Dhiyo Yonaḥ Prachodayāt."</p>

        <h2>How to Practice Mantra Meditation</h2>
        
        <h3>Basic Technique</h3>
        <ul>
          <li>Find a comfortable seated position</li>
          <li>Close your eyes and take a few deep breaths</li>
          <li>Begin repeating your chosen mantra</li>
          <li>You can chant aloud, whisper, or repeat silently</li>
          <li>Focus on the sound and vibration</li>
          <li>When your mind wanders, gently return to the mantra</li>
        </ul>

        <h3>Using Mala Beads</h3>
        <p>Traditional mala beads (108 beads) can help maintain focus during mantra practice. Move one bead with each repetition, completing a full cycle of 108 mantras.</p>

        <h2>Benefits of Regular Mantra Practice</h2>
        
        <ul>
          <li><strong>Mental Clarity:</strong> Reduces mental chatter and improves concentration</li>
          <li><strong>Emotional Balance:</strong> Helps process difficult emotions and cultivates positive states</li>
          <li><strong>Spiritual Connection:</strong> Deepens meditation and sense of unity</li>
          <li><strong>Physical Health:</strong> Lowers blood pressure and supports immune function</li>
        </ul>

        <h2>Choosing Your Personal Mantra</h2>
        
        <p>Select a mantra that resonates with your current needs and spiritual goals:</p>
        
        <ul>
          <li><strong>For Peace:</strong> Om Shanti Shanti Shanti</li>
          <li><strong>For Love:</strong> Om Mani Padme Hum</li>
          <li><strong>For Strength:</strong> Om Gam Ganapataye Namaha</li>
          <li><strong>For Wisdom:</strong> Om Aim Saraswatyai Namaha</li>
        </ul>

        <blockquote>
          "The mantra becomes one pointed arrow. If you take that arrow and shoot it into the center of your heart, it will transform you." - Krishna Das
        </blockquote>

        <p>Remember, the power of mantra lies not just in the words themselves, but in the devotion, intention, and consistency with which you practice. Start with just a few minutes daily and gradually increase your practice as it becomes a natural part of your spiritual routine.</p>
      `,
      author: 'Swami Ananda',
      date: 'February 8, 2024',
      readTime: '7 min read',
      category: 'Philosophy',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=400&fit=crop',
      tags: ['Mantras', 'Sound Healing', 'Meditation', 'Sanskrit', 'Spiritual Practice']
    },
    'yoga-anatomy-guide': {
      id: 8,
      title: 'Yoga Anatomy: Understanding Your Body',
      content: `
        <p>Understanding basic anatomy is essential for safe and effective yoga practice. When we know how our bodies work, we can practice with greater awareness, prevent injuries, and deepen our connection between mind and body.</p>

        <h2>The Spine: Your Central Support</h2>
        
        <p>The spine consists of 33 vertebrae arranged in four natural curves:</p>
        
        <ul>
          <li><strong>Cervical Spine (7 vertebrae):</strong> Natural inward curve (lordosis)</li>
          <li><strong>Thoracic Spine (12 vertebrae):</strong> Natural outward curve (kyphosis)</li>
          <li><strong>Lumbar Spine (5 vertebrae):</strong> Natural inward curve (lordosis)</li>
          <li><strong>Sacrum and Coccyx (9 fused vertebrae):</strong> Natural outward curve</li>
        </ul>

        <h3>Protecting Your Spine in Yoga</h3>
        <ul>
          <li>Maintain natural curves during forward folds</li>
          <li>Engage core muscles for support</li>
          <li>Move slowly and mindfully</li>
          <li>Avoid forcing deep twists</li>
        </ul>

        <h2>Core Stability and Strength</h2>
        
        <p>Your core is much more than just abdominal muscles. It includes:</p>
        
        <ul>
          <li><strong>Diaphragm:</strong> Primary breathing muscle</li>
          <li><strong>Pelvic Floor:</strong> Support for pelvic organs</li>
          <li><strong>Transverse Abdominis:</strong> Deep abdominal muscle</li>
          <li><strong>Multifidus:</strong> Deep spinal stabilizers</li>
        </ul>

        <h2>Understanding Joint Mobility</h2>
        
        <h3>Shoulders</h3>
        <p>The shoulder joint is highly mobile but inherently unstable. Focus on:</p>
        <ul>
          <li>Strengthening the rotator cuff muscles</li>
          <li>Maintaining proper alignment in arm balances</li>
          <li>Warming up thoroughly before intense arm work</li>
        </ul>

        <h3>Hips</h3>
        <p>Hip flexibility varies greatly among individuals. Remember:</p>
        <ul>
          <li>Bone structure affects range of motion</li>
          <li>Tight hip flexors are common in modern lifestyles</li>
          <li>Balance opening with strengthening</li>
        </ul>

        <h2>Breath and Movement</h2>
        
        <p>The respiratory system is intimately connected to movement and posture:</p>
        
        <ul>
          <li><strong>Diaphragmatic Breathing:</strong> Supports core stability</li>
          <li><strong>Breath Awareness:</strong> Helps prevent overexertion</li>
          <li><strong>Pranayama:</strong> Enhances nervous system function</li>
        </ul>

        <h2>Common Yoga Injuries and Prevention</h2>
        
        <h3>Lower Back</h3>
        <ul>
          <li>Avoid rounding the spine in forward folds</li>
          <li>Strengthen core and hip muscles</li>
          <li>Modify poses as needed</li>
        </ul>

        <h3>Neck and Shoulders</h3>
        <ul>
          <li>Avoid putting weight on the neck in inversions</li>
          <li>Keep shoulders away from ears</li>
          <li>Build strength gradually</li>
        </ul>

        <h3>Knees</h3>
        <ul>
          <li>Never force hip opening poses</li>
          <li>Use props for support</li>
          <li>Listen to your body's signals</li>
        </ul>

        <h2>Working with Your Unique Body</h2>
        
        <p>Every body is different, and yoga should be adapted to individual needs:</p>
        
        <ul>
          <li><strong>Bone Structure:</strong> Affects range of motion</li>
          <li><strong>Muscle Fiber Types:</strong> Influence strength and flexibility</li>
          <li><strong>Past Injuries:</strong> May require modifications</li>
          <li><strong>Daily Activities:</strong> Create patterns that need addressing</li>
        </ul>

        <blockquote>
          "Your body is not a problem to be solved, but a gift to be received. Yoga is not about making your body perfect, but about making peace with the body you have."
        </blockquote>

        <p>Remember, the goal of yoga is not to achieve perfect poses, but to develop a deeper understanding and appreciation of your body. Practice with patience, listen to your body's wisdom, and always prioritize safety over aesthetics.</p>
      `,
      author: 'Dr. Priya Nair',
      date: 'January 30, 2024',
      readTime: '11 min read',
      category: 'Anatomy',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      tags: ['Anatomy', 'Safety', 'Alignment', 'Injury Prevention', 'Body Awareness']
    },
    'rishikesh-spiritual-guide': {
      id: 9,
      title: 'The Spiritual Heart of India: Rishikesh Guide',
      content: `
        <p>Rishikesh, nestled in the foothills of the Himalayas along the sacred Ganges River, is revered as the "Yoga Capital of the World." This ancient city has been a pilgrimage destination for spiritual seekers for thousands of years, offering a unique blend of natural beauty, sacred energy, and profound spiritual teachings.</p>

        <h2>Sacred Geography</h2>
        
        <p>The very location of Rishikesh enhances its spiritual significance:</p>
        
        <ul>
          <li><strong>Ganges River:</strong> Considered the most sacred river in Hinduism</li>
          <li><strong>Himalayan Foothills:</strong> Ancient seat of yogic wisdom</li>
          <li><strong>Confluence of Energies:</strong> Where earthly and divine realms meet</li>
          <li><strong>Natural Amphitheater:</strong> Mountains create a sacred container</li>
        </ul>

        <h2>Essential Sacred Sites</h2>
        
        <h3>Triveni Ghat</h3>
        <p>The main bathing ghat where the evening Ganga Aarti (river worship ceremony) takes place daily. Hundreds of oil lamps float on the water as devotees offer prayers and gratitude.</p>

        <h3>Parmarth Niketan Ashram</h3>
        <p>One of the largest ashrams in Rishikesh, offering accommodation, yoga classes, and spiritual programs. The evening aarti here is particularly moving.</p>

        <h3>Beatles Ashram (Chaurasi Kutia)</h3>
        <p>Where The Beatles stayed in 1968 to study meditation with Maharishi Mahesh Yogi. Now a fascinating blend of spiritual history and street art.</p>

        <h3>Neelkanth Mahadev Temple</h3>
        <p>A sacred Shiva temple located 32 kilometers from Rishikesh, accessible by a beautiful trek through the mountains.</p>

        <h2>Spiritual Practices and Experiences</h2>
        
        <h3>Morning Rituals</h3>
        <ul>
          <li><strong>Sunrise Meditation:</strong> Practice on the riverbank as the sun rises over the mountains</li>
          <li><strong>Ganga Snan:</strong> Holy bath in the sacred river (when water levels are safe)</li>
          <li><strong>Temple Visits:</strong> Participate in morning prayers and offerings</li>
        </ul>

        <h3>Evening Ceremonies</h3>
        <ul>
          <li><strong>Ganga Aarti:</strong> Daily river worship ceremony at sunset</li>
          <li><strong>Satsang:</strong> Spiritual gatherings with chanting and discourse</li>
          <li><strong>Meditation:</strong> Group meditation sessions under the stars</li>
        </ul>

        <h2>Ashram Life</h2>
        
        <p>Staying in an ashram provides authentic spiritual immersion:</p>
        
        <h3>Daily Schedule</h3>
        <ul>
          <li><strong>5:00 AM:</strong> Wake-up bell and morning prayers</li>
          <li><strong>6:00 AM:</strong> Meditation and pranayama</li>
          <li><strong>7:30 AM:</strong> Yoga asana practice</li>
          <li><strong>9:00 AM:</strong> Breakfast and rest</li>
          <li><strong>11:00 AM:</strong> Karma yoga (selfless service)</li>
          <li><strong>1:00 PM:</strong> Lunch and rest</li>
          <li><strong>4:00 PM:</strong> Philosophy study or lectures</li>
          <li><strong>6:00 PM:</strong> Evening yoga or meditation</li>
          <li><strong>7:30 PM:</strong> Dinner</li>
          <li><strong>8:30 PM:</strong> Satsang or personal practice</li>
        </ul>

        <h2>Adventure and Nature</h2>
        
        <p>Rishikesh offers numerous outdoor activities that complement spiritual practice:</p>
        
        <ul>
          <li><strong>White Water Rafting:</strong> Thrilling rapids on the Ganges</li>
          <li><strong>Trekking:</strong> Himalayan trails and waterfalls</li>
          <li><strong>Bungee Jumping:</strong> India's highest bungee jump</li>
          <li><strong>Rock Climbing:</strong> Natural rock formations</li>
          <li><strong>Camping:</strong> Riverside camping under the stars</li>
        </ul>

        <h2>Food and Lifestyle</h2>
        
        <h3>Sattvic Diet</h3>
        <p>Most ashrams and many restaurants serve pure vegetarian food that supports spiritual practice:</p>
        <ul>
          <li>Fresh, locally grown vegetables</li>
          <li>Ayurvedic spices and herbs</li>
          <li>No onion, garlic, or stimulants</li>
          <li>Emphasis on fresh, light meals</li>
        </ul>

        <h3>Local Markets</h3>
        <ul>
          <li><strong>Laxman Jhula Market:</strong> Spiritual books, malas, and yoga accessories</li>
          <li><strong>Ram Jhula Market:</strong> Clothing, jewelry, and handicrafts</li>
          <li><strong>Local Cafes:</strong> Healthy food and international cuisine</li>
        </ul>

        <h2>Best Time to Visit</h2>
        
        <ul>
          <li><strong>March-April:</strong> Pleasant weather, perfect for outdoor activities</li>
          <li><strong>September-November:</strong> Post-monsoon clarity, comfortable temperatures</li>
          <li><strong>December-February:</strong> Cool weather, fewer crowds</li>
          <li><strong>Avoid:</strong> Monsoon season (July-August) due to heavy rains</li>
        </ul>

        <h2>Practical Tips</h2>
        
        <ul>
          <li><strong>Respect Local Customs:</strong> Dress modestly, especially near temples</li>
          <li><strong>River Safety:</strong> Be cautious near the Ganges, currents can be strong</li>
          <li><strong>Bargaining:</strong> Expected in markets, but be fair</li>
          <li><strong>Photography:</strong> Ask permission before photographing people</li>
          <li><strong>Spiritual Etiquette:</strong> Maintain silence during ceremonies</li>
        </ul>

        <blockquote>
          "Rishikesh is not just a destination; it's a transformation. The mountains hold ancient wisdom, the river carries away what no longer serves, and the community of seekers reminds us that we're all walking each other home."
        </blockquote>

        <p>Whether you come for a weekend retreat or an extended spiritual journey, Rishikesh offers the perfect environment for deepening your practice, connecting with like-minded souls, and experiencing the profound peace that comes from aligning with the natural rhythms of life.</p>
      `,
      author: 'Rajesh Kumar',
      date: 'January 25, 2024',
      readTime: '15 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=400&fit=crop',
      tags: ['Rishikesh', 'Spiritual Travel', 'Sacred Sites', 'Ashram Life', 'Pilgrimage']
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-ivory-900 mb-4">Post Not Found</h1>
          <p className="text-ivory-700 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = [
    {
      title: 'Meditation for Beginners: Finding Peace Within',
      slug: 'meditation-for-beginners',
      category: 'Meditation',
      readTime: '5 min read'
    },
    {
      title: 'Sacred Mantras: The Power of Sound Healing',
      slug: 'sacred-mantras-sound-healing',
      category: 'Philosophy',
      readTime: '7 min read'
    },
    {
      title: 'Yoga Teacher Training: What to Expect',
      slug: 'yoga-teacher-training-guide',
      category: 'Training',
      readTime: '12 min read'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container-custom h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blogs
            </Link>
            
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <span className="bg-primary px-3 py-1 rounded-full font-medium">
                {currentPost.category}
              </span>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentPost.date}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {currentPost.readTime}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {currentPost.author}
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
              {currentPost.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Article Actions */}
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-ivory-200">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-ivory-600 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>24 likes</span>
                </button>
                <button className="flex items-center space-x-2 text-ivory-600 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
              <div className="flex items-center text-ivory-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{currentPost.readTime}</span>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg prose-ivory max-w-none"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-ivory-200">
              <h3 className="text-lg font-serif text-ivory-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {currentPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-ivory-100 text-ivory-700 rounded-full text-sm hover:bg-ivory-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-ivory-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">
                {currentPost.author.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-ivory-900 mb-2">{currentPost.author}</h3>
                <p className="text-ivory-700 leading-relaxed">
                  A dedicated teacher and practitioner with over 15 years of experience in traditional yoga and meditation. 
                  Passionate about sharing the transformative wisdom of ancient practices with modern seekers on their spiritual journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-ivory-900 text-center mb-12">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-ivory-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="mb-4">
                      <span className="text-primary text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-serif text-ivory-900 mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="text-ivory-600 text-sm">
                      {post.readTime}
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 