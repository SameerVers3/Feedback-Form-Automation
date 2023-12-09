chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "pageLoaded") {
    console.log("Page loaded; initialization may be performed here if needed.");
  } else if (request.action === "randomlySelect") {
    console.log("Randomly selecting radio buttons...");
    const courseEvaluation = [
      "The course content was well-organized and easy to follow, providing a comprehensive understanding of the subject matter.",
      "Quizzes were challenging and didn't align well with the material covered in the lectures.",
      "The instructor was knowledgeable and engaging, making the learning experience enjoyable.",
      "Assignments lacked clear instructions, leading to confusion among students.",
      "The course fostered a collaborative learning environment through group projects and discussions.",
      "Evaluation heavily relied on a single final exam, putting excessive pressure on students for a one-time performance.",
      "Regular feedback on assignments was provided promptly, aiding in continuous improvement.",
      "The online platform used for quizzes was unreliable, causing technical difficulties and disruptions during assessments.",
      "The course incorporated real-world applications, enhancing the practical relevance of the concepts learned.",
      "Pacing of the course was uneven, with some topics rushed through while others were not covered in sufficient detail.",
      "The course materials were outdated, making it challenging to connect theoretical concepts to real-world scenarios.",
      "The grading criteria were unclear, making it difficult to understand how assessments were being evaluated.",
      "The course lacked flexibility in accommodating different learning styles, hindering the overall learning experience.",
      "The instructor showed a lack of availability outside of class, making it challenging to seek additional help when needed.",
      "The course lacked opportunities for hands-on practice, leaving students with a theoretical understanding but limited practical skills.",
      "The assigned readings were overly complex, making it difficult for students to grasp essential concepts.",
      "The group projects were poorly organized, leading to unequal distribution of workload and frustration among team members.",
      "The course materials were disorganized, making it challenging to locate specific information when needed.",
      "The instructor frequently went off-topic during lectures, causing confusion and disrupting the flow of the class.",
      "The course lacked a clear connection between lectures and practical applications, leaving students struggling to see the relevance of the material.",
    ];

    const instructorEvaluation = [
      "Instructor's delivery of lectures was engaging and facilitated a dynamic learning environment.",
      "Classroom learning environment was conducive to active participation and discussions.",
      "Instructor's teaching style effectively conveyed complex concepts in an easily understandable manner.",
      "Classroom learning environment fostered a sense of collaboration among students.",
      "Instructor's use of multimedia resources enhanced the overall learning experience.",
      "Classroom atmosphere encouraged critical thinking and problem-solving.",
      "Instructor effectively incorporated real-world examples to illustrate theoretical concepts.",
      "Classroom learning environment supported diverse learning styles and preferences.",
      "Instructor demonstrated a passion for the subject matter, creating enthusiasm among students.",
      "Classroom interactions were respectful, promoting an inclusive and supportive atmosphere.",
      "The instructor's communication was unclear at times, causing confusion among students about course expectations.",
      "The classroom lacked proper technological support, leading to disruptions during online lectures.",
      "The instructor showed a lack of responsiveness to student concerns, impacting the overall learning experience.",
      "The grading feedback provided by the instructor was vague, making it difficult for students to understand their mistakes.",
      "The instructor did not effectively address student questions during lectures, leaving uncertainties unresolved.",
      "The pace of the lectures was inconsistent, making it challenging for students to keep up with the material.",
      "The instructor relied too heavily on a single teaching method, neglecting the diverse learning preferences of the students.",
      "The classroom lacked a structured approach to discussions, resulting in disorganized and unproductive conversations.",
      "The instructor's expectations for participation were unclear, causing anxiety among students.",
      "The instructor's assessment of student understanding was inadequate, leading to gaps in the coverage of essential topics.",
    ];

    const learningMaterialEvaluation = [
      "Learning materials, including textbooks, provided a comprehensive coverage of the course content.",
      "Reference books recommended were helpful in gaining a deeper understanding of the subject.",
      "Video resources effectively complemented the learning materials, offering visual explanations and examples.",
      "The variety of learning resources contributed to a well-rounded understanding of the topics.",
      "Supplementary materials were readily available and supported self-paced learning.",
      "The recommended textbooks were well-structured and aligned with the course objectives.",
      "Additional readings enhanced the learning experience by providing diverse perspectives.",
      "Video content was well-produced, making it easy to follow and understand complex concepts.",
      "The availability of online resources facilitated access to additional study materials.",
      "The selection of learning materials catered to different learning styles, accommodating various preferences.",
      "The learning materials were poorly organized, making it challenging to find relevant information when needed.",
      "The recommended readings were overly academic, making it difficult for students to connect theory to practical applications.",
      "The online platform for accessing learning materials was outdated and prone to technical issues.",
      "The supplementary materials were irrelevant to the course content, causing confusion among students.",
      "The recommended videos were too lengthy, making it challenging for students to stay focused on the key concepts.",
      "The learning materials lacked diversity, limiting the exposure of students to different perspectives.",
      "The online platform for quizzes had limited functionality, hindering the effectiveness of self-assessment.",
      "The supplementary materials were not updated to reflect recent advancements in the field, impacting the relevance of the content.",
      "The recommended textbooks were hard to find or not readily available, causing delays in students' access to essential resources.",
      "The learning materials did not provide enough practical examples, making it difficult for students to apply theoretical knowledge.",
    ];

    const mixedLabInstructorFeedback = [
      "The lab instructor exhibited exceptional expertise, delivering content with clarity and precision.",
      "The learning environment in the lab was not conducive to active participation; it felt disorganized and unstructured.",
      "Lab instructions were unclear and poorly communicated, hindering the learning process for students.",
      "The lab instructor demonstrated a keen understanding of complex concepts, making challenging topics more accessible.",
      "Hands-on activities in the lab were unengaging and failed to complement the theoretical aspects of the course effectively.",
      "Lab sessions were well-organized, creating an environment that promoted a sense of structure and focus.",
      "The lab instructor struggled to convey complex concepts, making it difficult for students to grasp essential topics.",
      "The lab instructor encouraged critical thinking and problem-solving skills, fostering intellectual growth among students.",
      "Multimedia resources used in the lab were ineffective, failing to enhance the overall learning experience.",
      "The lab environment supported diverse learning styles and preferences, catering to the needs of every student.",
      "The lab instructor's passion for the subject matter was evident, creating enthusiasm and inspiration among students.",
      "Lab instructions were clearly communicated, contributing to a smooth and efficient learning process.",
  ];
  

    console.log("Randomly selecting radio buttons...");

    var radioButtons = document.querySelectorAll(
      ".m-list-timeline__items .rdo"
    );

    console.log("Number of radio buttons:", radioButtons.length);

    if (radioButtons.length > 0) {
      var totalSets = radioButtons.length / 5;

      for (var i = 0; i < totalSets; i++) {
        var startIndex = i * 5;
        var endIndex = startIndex + 5;

        var randomIndex = Math.floor(Math.random() * 5);

        // Uncheck all radio buttons in the current set
        for (var j = startIndex; j < endIndex; j++) {
          radioButtons[j].checked = false;
        }

        // Check the randomly selected radio button in the current set
        radioButtons[startIndex + randomIndex].checked = true;
        console.log("Random radio button checked in set:", i + 1);
      }

      var textarea = document.querySelectorAll('textarea[name="FB_Text"]');

      if (textarea.length > 0) {
        if (textarea.length == 1){
          textarea[0].value = mixedLabInstructorFeedback[Math.floor(Math.random() * 10)];
          console.log("Content added to text area 1 in set:", i + 1);
        }
        else {
          if (textarea[0]) {
            textarea[0].value = courseEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 1 in set:", i + 1);
          }
          if (textarea[1]) {
            textarea[1].value =
              instructorEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 2 in set:", i + 1);
          }
          if (textarea[2]) {
            textarea[2].value =
              learningMaterialEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 3 in set:", i + 1);
          }
        }
      } else {
        console.log("No text areas found.");
      }
    } else {
      console.log("No radio buttons found.");
    }

    // Send a response back to the background script
    sendResponse({ message: "Random selection completed." });
  } else if (request.action === "positive") {
    console.log("Randomly selecting radio buttons...");
    const courseEvaluation = [
      "The course content was exceptionally well-organized, providing a clear and thorough understanding of the subject matter.",
      "Quizzes were thoughtfully designed to challenge and reinforce the material covered in the lectures.",
      "The instructor was not only highly knowledgeable but also made the learning experience remarkably enjoyable and engaging.",
      "Assignments were expertly crafted with clear instructions, ensuring a smooth and comprehensible completion process for students.",
      "The course not only fostered but brilliantly nurtured a collaborative learning environment through stimulating group projects and discussions.",
      "While the final exam was comprehensive, it served as a fantastic opportunity for students to showcase their mastery of the material.",
      "Regular and insightful feedback on assignments was provided promptly, contributing significantly to continuous improvement and growth.",
      "The online platform used for quizzes was incredibly reliable, minimizing technical difficulties and disruptions during assessments.",
      "The course seamlessly incorporated real-world applications, greatly enhancing the practical relevance of the concepts learned.",
      "The pacing of the course was consistently well-balanced, ensuring that each topic received the attention and detail it deserved.",
      "The course materials were not only up-to-date but also expertly curated, providing a rich and comprehensive learning experience.",
      "The grading criteria were transparent and fair, allowing students to understand precisely how assessments were being evaluated.",
      "The course demonstrated remarkable flexibility in accommodating diverse learning styles, enriching the overall learning experience for every student.",
      "The instructor exhibited exceptional availability outside of class, actively supporting students and providing valuable guidance when needed.",
      "The course seamlessly blended theoretical understanding with hands-on practice, equipping students with both knowledge and practical skills.",
      "Assigned readings were thoughtfully chosen, striking the perfect balance between complexity and accessibility for students to grasp essential concepts.",
      "Group projects were meticulously organized, ensuring an equitable distribution of workload and fostering a collaborative spirit among team members.",
      "The course materials were impeccably organized, allowing students to easily locate and navigate through the wealth of valuable information.",
      "The instructor maintained a consistently engaging and focused delivery during lectures, creating a conducive learning atmosphere.",
      "The course established a clear and meaningful connection between lectures and practical applications, emphasizing the real-world relevance of the material.",
    ];

    const instructorEvaluation = [
      "The instructor's delivery of lectures was exceptionally engaging and facilitated a dynamic learning environment.",
      "The classroom learning environment was not only conducive to active participation but also encouraged insightful discussions among students.",
      "The instructor's teaching style was remarkably effective, conveying complex concepts in an easily understandable manner.",
      "The classroom learning environment not only fostered but also actively promoted a sense of collaboration among students.",
      "The instructor's use of multimedia resources greatly enhanced the overall learning experience, providing diverse perspectives and examples.",
      "The classroom atmosphere consistently encouraged critical thinking and problem-solving, fostering intellectual growth among students.",
      "The instructor effectively incorporated real-world examples to illustrate theoretical concepts, making the material more relatable and engaging.",
      "The classroom learning environment actively supported diverse learning styles and preferences, ensuring an inclusive and enriching experience for all students.",
      "The instructor consistently demonstrated a passion for the subject matter, creating enthusiasm and inspiration among students.",
      "Classroom interactions were consistently respectful, fostering an inclusive and supportive atmosphere for all students.",
      "The instructor's communication was clear and effective, ensuring that students understood course expectations and objectives.",
      "The classroom had excellent technological support, minimizing disruptions and ensuring a smooth online learning experience.",
      "The instructor demonstrated exceptional responsiveness to student concerns, actively addressing questions and providing valuable support.",
      "The grading feedback provided by the instructor was specific and constructive, helping students understand their strengths and areas for improvement.",
      "The instructor proactively addressed student questions during lectures, creating a dynamic and engaging learning experience.",
      "The pace of the lectures was consistent and well-balanced, allowing students to absorb and comprehend the material effectively.",
      "The instructor employed a diverse range of teaching methods, catering to various learning preferences and enhancing overall comprehension.",
      "Classroom discussions were structured and productive, creating an environment where students felt encouraged to express their thoughts and ideas.",
      "The instructor's expectations for participation were clear, creating a supportive and encouraging learning atmosphere.",
      "The instructor effectively assessed student understanding, ensuring that essential topics were covered comprehensively.",
    ];

    const learningMaterialEvaluation = [
      "Learning materials, including textbooks, were exceptionally well-crafted, providing a comprehensive and insightful coverage of the course content.",
      "Reference books recommended were not only helpful but also enriched the learning experience by offering deeper insights into the subject.",
      "Video resources were thoughtfully curated, effectively complementing the learning materials with visual explanations and examples.",
      "The variety of learning resources contributed significantly to a well-rounded understanding of the topics, ensuring a holistic learning experience.",
      "Supplementary materials were readily available and supported self-paced learning, allowing students to delve deeper into specific areas of interest.",
      "The recommended textbooks were not only well-structured but also perfectly aligned with the course objectives, enhancing overall coherence.",
      "Additional readings actively enhanced the learning experience by providing diverse perspectives and additional context to the course content.",
      "Video content was not only well-produced but also highly engaging, making it easy for students to follow and understand complex concepts.",
      "The availability of online resources was exceptional, facilitating easy access to additional study materials and resources.",
      "The selection of learning materials was thoughtfully curated to cater to different learning styles, accommodating various preferences and needs.",
      "The learning materials were not only up-to-date but also reflected the latest advancements in the field, ensuring relevance and practical applicability.",
      "The supplementary materials actively supported the course content, providing valuable context and enriching the overall learning experience.",
      "The online platform for accessing learning materials was not only reliable but also user-friendly, minimizing technical difficulties for students.",
      "The supplementary materials were relevant and complementary to the course content, providing additional insights and perspectives.",
      "The recommended videos were not only informative but also concise, making it easy for students to grasp key concepts efficiently.",
      "The learning materials exhibited a high level of diversity, catering to different interests and preferences among students.",
      "The online platform for quizzes had excellent functionality, enhancing the effectiveness of self-assessment and reinforcing learning.",
      "The supplementary materials were consistently updated to reflect recent advancements, ensuring that students had access to the latest information.",
      "The recommended textbooks were readily available and easily accessible, ensuring that students had timely access to essential resources.",
      "The learning materials not only provided theoretical knowledge but also included practical examples, enabling students to apply concepts in real-world scenarios.",
    ];

    const positiveLabInstructorFeedback = [
      "The lab instructor exhibited exceptional expertise, delivering content with clarity and precision.",
      "The learning environment in the lab was highly conducive to active participation and collaborative learning.",
      "Lab instructions were clearly communicated, contributing to a smooth and efficient learning process.",
      "The lab instructor demonstrated a keen understanding of complex concepts, making challenging topics more accessible.",
      "The hands-on activities in the lab were engaging and complemented the theoretical aspects of the course effectively.",
      "Lab sessions were well-organized, creating an environment that promoted a sense of structure and focus.",
      "The lab instructor encouraged critical thinking and problem-solving skills, fostering intellectual growth among students.",
      "Multimedia resources used in the lab enhanced the overall learning experience, providing visual explanations and examples.",
      "The lab environment supported diverse learning styles and preferences, catering to the needs of every student.",
      "The lab instructor's passion for the subject matter was evident, creating enthusiasm and inspiration among students.",
  ];
  

    console.log("positive selecting radio buttons...");

    var radioButtons = document.querySelectorAll(
      ".m-list-timeline__items .rdo"
    );

    console.log("Number of radio buttons:", radioButtons.length);

    if (radioButtons.length > 0) {
      var totalSets = radioButtons.length / 5;

      for (var i = 0; i < totalSets; i++) {
        var startIndex = i * 5;
        var endIndex = startIndex + 5;

        // Uncheck all radio buttons in the current set
        for (var j = startIndex; j < endIndex; j++) {
          radioButtons[j].checked = false;
        }

        // Check the randomly selected radio button in the current set
        radioButtons[startIndex].checked = true;
        console.log("positive radio button checked in set:", i + 1);
      }

      var textarea = document.querySelectorAll('textarea[name="FB_Text"]');

      if (textarea.length > 0) {
        if (textarea.length == 1){
          textarea[0].value = positiveLabInstructorFeedback[Math.floor(Math.random() * 10)];
          console.log("Content added to text area 1 in set:", i + 1);
        }
        else {
          if (textarea[0]) {
            textarea[0].value = courseEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 1 in set:", i + 1);
          }
          if (textarea[1]) {
            textarea[1].value =
              instructorEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 2 in set:", i + 1);
          }
          if (textarea[2]) {
            textarea[2].value =
              learningMaterialEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 3 in set:", i + 1);
          }
        }
      } else {
        console.log("No text areas found.");
      }
    } else {
      console.log("No radio buttons found.");
    }

    // Send a response back to the background script
    sendResponse({ message: "positive selection completed." });
  } else if (request.action === "negative") {
    console.log("negative selecting radio buttons...");
    const courseEvaluation = [
      "The course content was disorganized and confusing, providing a poor understanding of the subject matter.",
      "Quizzes were unfairly difficult and did not align with the material covered in the lectures.",
      "The instructor lacked knowledge and failed to make the learning experience engaging or enjoyable.",
      "Assignments were poorly designed with unclear instructions, leading to widespread confusion among students.",
      "The course did not foster a collaborative learning environment; group projects and discussions were unproductive and frustrating.",
      "Evaluation heavily relied on a single final exam, adding unnecessary pressure on students for a one-time performance.",
      "Feedback on assignments was rarely provided, hindering any chance of continuous improvement.",
      "The online platform used for quizzes was unreliable, causing frequent technical difficulties and disruptions during assessments.",
      "The course failed to incorporate real-world applications, leaving concepts detached from practical relevance.",
      "Pacing of the course was inconsistent, with some topics rushed through while others were ignored, resulting in an unbalanced curriculum.",
      "The course materials were outdated, making it difficult to connect theoretical concepts to real-world scenarios.",
      "Grading criteria were ambiguous, leaving students in the dark about how assessments were being evaluated.",
      "The course lacked flexibility in accommodating different learning styles, resulting in a one-size-fits-all approach.",
      "The instructor was rarely available outside of class, providing little to no support when needed.",
      "The course lacked hands-on practice, leaving students with theoretical knowledge but no practical skills.",
      "Assigned readings were overly complex, making it nearly impossible for students to grasp essential concepts.",
      "Group projects were poorly organized, leading to unequal distribution of workload and frustration among team members.",
      "Course materials were disorganized, making it challenging to locate specific information when needed.",
      "The instructor frequently went off-topic during lectures, causing confusion and disrupting the flow of the class.",
      "The course failed to establish a clear connection between lectures and practical applications, leaving students struggling to see the relevance of the material.",
    ];

    const instructorEvaluation = [
      "Instructor's delivery of lectures was dull and uninspiring, creating a stagnant and unengaging learning environment.",
      "Classroom learning environment was not conducive to active participation and lacked meaningful discussions.",
      "Instructor's teaching style failed to convey complex concepts effectively, leaving students confused and frustrated.",
      "Classroom learning environment did not foster collaboration among students; instead, it was marked by disinterest and apathy.",
      "Instructor's use of multimedia resources was ineffective, adding little value to the overall learning experience.",
      "Classroom atmosphere discouraged critical thinking and problem-solving, resulting in a lack of intellectual growth.",
      "Instructor failed to incorporate real-world examples effectively, making theoretical concepts seem disconnected and irrelevant.",
      "Classroom learning environment did not support diverse learning styles and preferences; it felt restrictive and one-dimensional.",
      "Instructor lacked passion for the subject matter, creating a dull and uninspiring atmosphere in the classroom.",
      "Classroom interactions were disrespectful, fostering a toxic and unsupportive atmosphere among students.",
      "Instructor's communication was unclear and inconsistent, causing confusion about course expectations.",
      "Classroom lacked proper technological support, leading to frequent disruptions during online lectures.",
      "Instructor showed a lack of responsiveness to student concerns, creating a frustrating and unproductive learning experience.",
      "Grading feedback provided by the instructor was vague and unhelpful, offering little guidance for improvement.",
      "Instructor did not effectively address student questions during lectures, leaving uncertainties unresolved.",
      "Pace of the lectures was inconsistent, making it challenging for students to follow and comprehend the material.",
      "Instructor relied too heavily on a single teaching method, neglecting the diverse learning preferences of the students.",
      "Classroom discussions were disorganized and unproductive, lacking structure and focus.",
      "Instructor's expectations for participation were unclear, causing anxiety and discomfort among students.",
      "Instructor's assessment of student understanding was inadequate, leading to significant gaps in the coverage of essential topics.",
    ];

    const learningMaterialEvaluation = [
      "Learning materials, including textbooks, were poorly organized and failed to provide a comprehensive coverage of the course content.",
      "Reference books recommended were unhelpful and added unnecessary complexity to the subject matter.",
      "Video resources were poorly curated, failing to complement the learning materials with meaningful visual explanations and examples.",
      "The variety of learning resources failed to contribute to a well-rounded understanding of the topics; instead, they added confusion.",
      "Supplementary materials were unavailable or inadequately supported self-paced learning, leaving students without additional resources.",
      "Recommended textbooks were poorly structured and did not align with the course objectives, contributing to overall confusion.",
      "Additional readings did not enhance the learning experience, providing little value and often distracting from core concepts.",
      "Video content was poorly produced, making it difficult for students to follow and understand complex concepts.",
      "Availability of online resources was limited, hindering access to additional study materials and resources.",
      "Selection of learning materials failed to cater to different learning styles, leaving various preferences unaddressed.",
      "Learning materials were outdated, reflecting a lack of effort to keep up with recent advancements in the field.",
      "Supplementary materials actively detracted from the course content, providing irrelevant or confusing information.",
      "Online platform for accessing learning materials was unreliable, causing frustration and hindering the learning process.",
      "Supplementary materials were irrelevant and did not contribute meaningfully to the course content.",
      "Recommended videos were lengthy and uninformative, making it challenging for students to grasp key concepts efficiently.",
      "Learning materials lacked diversity, failing to cater to different interests and preferences among students.",
      "Online platform for quizzes had limited functionality, hindering the effectiveness of self-assessment and reinforcing learning.",
      "Supplementary materials were not updated to reflect recent advancements, rendering them outdated and irrelevant.",
      "Recommended textbooks were not readily available, causing delays in students' access to essential resources.",
      "Learning materials failed to provide practical examples, leaving students without the ability to apply theoretical knowledge.",
    ];

    const negativeLabInstructorFeedback = [
      "The lab instructor lacked expertise, leading to confusion and frustration among students.",
      "The learning environment in the lab was not conducive to active participation; it felt disorganized and unstructured.",
      "Lab instructions were unclear and poorly communicated, hindering the learning process for students.",
      "The lab instructor struggled to convey complex concepts, making it difficult for students to grasp essential topics.",
      "Hands-on activities in the lab were unengaging and failed to complement the theoretical aspects of the course effectively.",
      "Lab sessions were disorganized and lacked structure, creating a chaotic learning environment.",
      "The lab instructor did not encourage critical thinking and problem-solving, hindering intellectual growth among students.",
      "Multimedia resources used in the lab were ineffective, failing to enhance the overall learning experience.",
      "The lab environment did not support diverse learning styles and preferences, neglecting the needs of some students.",
      "The lab instructor displayed a lack of passion for the subject matter, creating a dull and uninspiring atmosphere.",
  ];
  

    console.log("negative selecting radio buttons...");

    var radioButtons = document.querySelectorAll(
      ".m-list-timeline__items .rdo"
    );

    console.log("Number of radio buttons:", radioButtons.length);

    if (radioButtons.length > 0) {
      var totalSets = radioButtons.length / 5;

      for (var i = 0; i < totalSets; i++) {
        var startIndex = i * 5;
        var endIndex = startIndex + 5;

        // Uncheck all radio buttons in the current set
        for (var j = startIndex; j < endIndex; j++) {
          radioButtons[j].checked = false;
        }

        // Check the randomly selected radio button in the current set
        radioButtons[endIndex - 1].checked = true;
        console.log("negative radio button checked in set:", i + 1);
      }

      var textarea = document.querySelectorAll('textarea[name="FB_Text"]');

      if (textarea.length > 0) {
        if (textarea.length == 1){
          textarea[0].value = negativeLabInstructorFeedback[Math.floor(Math.random() * 10)];
          console.log("Content added to text area 1 in set:", i + 1);
        }
        else {
          if (textarea[0]) {
            textarea[0].value = courseEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 1 in set:", i + 1);
          }
          if (textarea[1]) {
            textarea[1].value =
              instructorEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 2 in set:", i + 1);
          }
          if (textarea[2]) {
            textarea[2].value =
              learningMaterialEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 3 in set:", i + 1);
          }
        }
      } else {
        console.log("No text areas found.");
      }
    } else {
      console.log("No radio buttons found.");
    }

    // Send a response back to the background script
    sendResponse({ message: "positive selection completed." });
  } else if (request.action === "neutral") {
    console.log("neutral selecting radio buttons...");
    const courseEvaluation = [
      "The course content was presented in an organized manner, providing a standard understanding of the subject matter.",
      "Quizzes were moderately challenging and somewhat aligned with the material covered in the lectures.",
      "The instructor demonstrated an average level of knowledge and engagement, resulting in a satisfactory learning experience.",
      "Assignments had clear instructions but lacked some depth, causing minor confusion among students.",
      "The course encouraged a somewhat collaborative learning environment through group projects and discussions.",
      "Evaluation included a mix of assessments, with both ongoing assignments and a final exam, balancing the pressure on students.",
      "Feedback on assignments was provided at a reasonable pace, allowing for gradual improvement.",
      "The online platform used for quizzes had occasional technical difficulties, causing minor disruptions during assessments.",
      "The course incorporated real-world applications to some extent, enhancing the practical relevance of the concepts learned.",
      "Pacing of the course was generally steady, with most topics adequately covered.",
    ];

    const instructorEvaluation = [
      "Instructor's delivery of lectures was decent, facilitating a satisfactory learning environment.",
      "Classroom learning environment allowed for moderate active participation and discussions.",
      "Instructor's teaching style effectively conveyed most complex concepts in an understandable manner.",
      "Classroom learning environment somewhat fostered a sense of collaboration among students.",
      "Instructor's use of multimedia resources added value to the learning experience, providing some diverse perspectives.",
      "Classroom atmosphere allowed for reasonable critical thinking and problem-solving.",
      "Instructor effectively incorporated real-world examples to illustrate theoretical concepts to a moderate extent.",
      "Classroom learning environment supported a range of learning styles and preferences to some degree.",
      "Instructor demonstrated a decent level of passion for the subject matter, creating a somewhat enthusiastic atmosphere.",
      "Classroom interactions were generally respectful, promoting a somewhat inclusive and supportive atmosphere.",
    ];

    const learningMaterialEvaluation = [
      "Learning materials, including textbooks, provided a satisfactory coverage of the course content.",
      "Reference books recommended offered some helpful insights for gaining a deeper understanding of the subject.",
      "Video resources somewhat complemented the learning materials, offering occasional visual explanations and examples.",
      "The variety of learning resources contributed moderately to a well-rounded understanding of the topics.",
      "Supplementary materials were available, supporting self-paced learning to some extent.",
      "The recommended textbooks were adequately structured and somewhat aligned with the course objectives.",
      "Additional readings added some value to the learning experience by providing diverse perspectives.",
      "Video content was moderately well-produced, making it somewhat easy to follow and understand complex concepts.",
      "The availability of online resources facilitated access to additional study materials to a reasonable extent.",
      "The selection of learning materials somewhat catered to different learning styles, accommodating some preferences.",
    ];

    const neutralLabInstructorFeedback = [
      "The lab instructor provided adequate expertise, delivering content with moderate clarity.",
      "The learning environment in the lab had aspects that were conducive to active participation, but improvements could be made.",
      "Lab instructions were communicated, but some clarity issues impacted the learning process for students.",
      "The lab instructor demonstrated a basic understanding of complex concepts, providing a reasonable level of accessibility.",
      "Hands-on activities in the lab were moderately engaging, with room for improvement in complementing theoretical aspects.",
      "Lab sessions had a moderate level of organization, providing a somewhat structured learning environment.",
      "The lab instructor had a balanced approach to encouraging critical thinking and problem-solving among students.",
      "Multimedia resources used in the lab had a moderate impact on enhancing the overall learning experience.",
      "The lab environment partially supported diverse learning styles and preferences, with room for improvement.",
      "The lab instructor displayed a standard level of enthusiasm for the subject matter.",
  ];
  

    console.log("Randomly selecting radio buttons...");

    var radioButtons = document.querySelectorAll(
      ".m-list-timeline__items .rdo"
    );

    console.log("Number of radio buttons:", radioButtons.length);

    if (radioButtons.length > 0) {
      var totalSets = radioButtons.length / 5;

      for (var i = 0; i < totalSets; i++) {
        var startIndex = i * 5;
        var endIndex = startIndex + 5;

        var randomIndex = Math.floor(Math.random() * 3) + 1;

        // Uncheck all radio buttons in the current set
        for (var j = startIndex; j < endIndex; j++) {
          radioButtons[j].checked = false;
        }

        // Check the randomly selected radio button in the current set
        radioButtons[startIndex + randomIndex].checked = true;
        console.log("Random radio button checked in set:", i + 1);
      }

      var textarea = document.querySelectorAll('textarea[name="FB_Text"]');

      if (textarea.length > 0) {
        if (textarea.length == 1){
          textarea[0].value = neutralLabInstructorFeedback[Math.floor(Math.random() * 10)];
          console.log("Content added to text area 1 in set:", i + 1);
        }
        else {
          if (textarea[0]) {
            textarea[0].value = courseEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 1 in set:", i + 1);
          }
          if (textarea[1]) {
            textarea[1].value =
              instructorEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 2 in set:", i + 1);
          }
          if (textarea[2]) {
            textarea[2].value =
              learningMaterialEvaluation[Math.floor(Math.random() * 10)];
            console.log("Content added to text area 3 in set:", i + 1);
          }
        }
      } else {
        console.log("No text areas found.");
      }
    } else {
      console.log("No radio buttons found.");
    }

    // Send a response back to the background script
    sendResponse({ message: "neutral selection completed." });
  }

  // Ensure that the listener returns true for asynchronous responses
  return true;
});
