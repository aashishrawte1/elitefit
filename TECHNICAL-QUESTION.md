1. How long did you spend on the coding test? 
     2 Hours

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

    React 18 New Features 

        Concurrent Features
        Transitions           
        Suspense on the server

    React 18 Improvements

        Automatic Batching
        Better Rendering
        Performance 

    Automatic Batching 

    All state modifications made using event handlers are grouped together using React's built-in batching functionality. It prevents the files from going through a pointless rendering procedure.

    function handleClick() {
        setIsFetching(false);
        setError(null);
        setFormStatus('success');
    }

    Transition 

    In order to distinguish between urgent and non-urgent updates, React has introduced a new concept called transition.

        Transition updates move the user interface (UI) from one view to another.
        Urgent updates reflect direct input, such as typing, clicking, pressing, etc.

        setInputValue(input);
        startTransition(()=> {
            setSearchQuery(input);
        })

    Suspense

    React suspense is a feature that enables developers to monitor the rendering elements while the process is still in progress. The react suspense is quite helpful since it provides a calm loading state while the user is dealing with a network conflict.

    function FoodListSuspenseWrapper() {
        const specialPromiseReasource = getSpecialPromiseTofetchItems();
        return (
            <Suspense fallback={<div>Loading item</div>}>
                <FoodList resource={specialPromiseReasource} />
            </Subpense>
        )
    }


    Concurrency in React

    React can interrupt, pause, restart, or quit a render in React 18 with concurrent rendering. This enables React to react rapidly to user input while engaged in a time-consuming rendering operation.


3. How would you track down a performance issue in production? Have you ever had to do this?

    1. Use monitoring tools to gather data on system metrics such as CPU usage, memory consumption, 
        disk I/O, and network activity.
    2. Tools like New Relic, Datadog, or built-in server monitoring tools can be helpful.
    3. Examine application and server logs for any error messages, warnings, or unusual behavior.
    4. Logs can provide insights into the application's behavior and help pinpoint potential issues.
    5. If your application involves database interactions, analyze database queries and performance.
    6. Identify slow queries and optimize them. Indexing, caching, or denormalization might be needed.
    7. Utilize browser developer tools to profile frontend performance.
    8. Analyze network requests, rendering times, and any bottlenecks in the client-side code.

4. If you had more time, what additional features or improvements would you consider adding to the task management application?

    Here are some additional features you can consider adding to enhance your task manager application:

        User Authentication:
            Implement user authentication to allow multiple users to have their own task lists.
            Add features like user registration, login, and logout.

        Task Categories:
            Allow users to categorize tasks into different categories or tags.
            Provide a filter option based on categories.

        Task Due Date Notifications:
            Implement a notification system to remind users of upcoming task due dates.
            Allow users to set reminders or receive notifications.

        Task Sorting and Filtering:
            Add the ability to sort tasks based on different criteria (e.g., due date, priority, creation date).
            Allow users to filter tasks based on various criteria.

        Task Comments:
            Allow users to add comments or notes to individual tasks.
            Enhance collaboration by enabling task-related discussions.

        Task Attachments:
            Enable users to attach files or links to tasks.
            This could be useful for attaching relevant documents or resources.

        Task History:
            Keep a history of changes made to each task.
            Allow users to view the history to track modifications.