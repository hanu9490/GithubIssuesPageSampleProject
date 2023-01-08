import IssueSlide from "../IssueSlide";

import "./index.css";

const gitIssuesPageData = [
  [
    {
      slideName: "Issues",
      slideUrl:
        "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List issues assigned to the authenticated user",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-issues-assigned-to-the-authenticated-user",
      },
      {
        id: 2,
        issueName:
          "List organization issues assigned to the authenticated user",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-organization-issues-assigned-to-the-authenticated-user",
      },
      {
        id: 3,
        issueName: "List repository issues",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues",
      },
      {
        id: 4,
        issueName: "Create an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue",
      },
      {
        id: 5,
        issueName: "Get an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#get-an-issue",
      },
      {
        id: 6,
        issueName: "Update an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#update-an-issue",
      },
      {
        id: 7,
        issueName: "Lock an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#lock-an-issue",
      },
      {
        id: 8,
        issueName: "Unlock an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#unlock-an-issue",
      },
      {
        id: 9,
        issueName:
          "List user account issues assigned to the authenticated user",
        issueUrl:
          "https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-user-account-issues-assigned-to-the-authenticated-user",
      },
    ],
  ],
  [
    {
      slideName: "Issue assignees",
      slideUrl:
        "https://docs.github.com/en/rest/issues/assignees?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List Assignees",
        issueUrl:
          "https://docs.github.com/en/rest/issues/assignees?apiVersion=2022-11-28#list-assignees",
      },
      {
        id: 2,
        issueName: "Check if a user can be assigned",
        issueUrl:
          "https://docs.github.com/en/rest/issues/assignees?apiVersion=2022-11-28#check-if-a-user-can-be-assigned",
      },
      {
        id: 3,
        issueName: "Add assignees to an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/assignees?apiVersion=2022-11-28#add-assignees-to-an-issue",
      },
      {
        id: 4,
        issueName: "Remove assignees from an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/assignees?apiVersion=2022-11-28#remove-assignees-from-an-issue",
      },
    ],
  ],
  [
    {
      slideName: "Issue comments",
      slideUrl:
        "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List issue comments for a repository",
        issueUrl:
          "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#list-issue-comments-for-a-repository",
      },
      {
        id: 2,
        issueName: "Get an issue comment",
        issueUrl:
          "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#get-an-issue-comment",
      },
      {
        id: 3,
        issueName: "Update an issue comment",
        issueUrl:
          "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#update-an-issue-comment",
      },
      {
        id: 4,
        issueName: "Delete an issue comment",
        issueUrl:
          "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#delete-an-issue-comment",
      },
      {
        id: 5,
        issueName: "List issue comment",
        issueUrl:
          "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#list-issue-comments",
      },
      {
        id: 6,
        issueName: "Create an issue comment",
        issueUrl:
          "https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#create-an-issue-comment",
      },
    ],
  ],
  [
    {
      slideName: "Issue events",
      slideUrl:
        "https://docs.github.com/en/rest/issues/events?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List issue events for a repository",
        issueUrl:
          "https://docs.github.com/en/rest/issues/events?apiVersion=2022-11-28#list-issue-events-for-a-repository",
      },
      {
        id: 2,
        issueName: "Get an issue event",
        issueUrl:
          "https://docs.github.com/en/rest/issues/events?apiVersion=2022-11-28#get-an-issue-event",
      },
      {
        id: 3,
        issueName: "List issue events",
        issueUrl:
          "https://docs.github.com/en/rest/issues/events?apiVersion=2022-11-28#list-issue-events",
      },
    ],
  ],
  [
    {
      slideName: "Labels",
      slideUrl:
        "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List labels for an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#list-labels-for-an-issue",
      },
      {
        id: 2,
        issueName: "Add label to an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#add-labels-to-an-issue",
      },
      {
        id: 3,
        issueName: "Set labels for an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#set-labels-for-an-issue",
      },
      {
        id: 4,
        issueName: "Remove all labels from an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#remove-all-labels-from-an-issue",
      },
      {
        id: 5,
        issueName: "Remove a label from an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#remove-a-label-from-an-issue",
      },
      {
        id: 6,
        issueName: "List labels for a repository",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#list-labels-for-a-repository",
      },
      {
        id: 7,
        issueName: "Create a label",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#create-a-label",
      },
      {
        id: 8,
        issueName: "Get a label",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#get-a-label",
      },
      {
        id: 9,
        issueName: "Update a label",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#update-a-label",
      },
      {
        id: 10,
        issueName: "Delete a label",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#delete-a-label",
      },
      {
        id: 11,
        issueName: "List labels for issues in a milestone",
        issueUrl:
          "https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#list-labels-for-issues-in-a-milestone",
      },
    ],
  ],
  [
    {
      slideName: "Milestones",
      slideUrl:
        "https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List milestones",
        issueUrl:
          "https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#list-milestones",
      },
      {
        id: 2,
        issueName: "Create a milestone",
        issueUrl:
          "https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#create-a-milestone",
      },
      {
        id: 3,
        issueName: "Get a milestone",
        issueUrl:
          "https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#get-a-milestone",
      },
      {
        id: 4,
        issueName: "Update a milestone",
        issueUrl:
          "https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#update-a-milestone",
      },
      {
        id: 5,
        issueName: "Delete a milestone",
        issueUrl:
          "https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#delete-a-milestone",
      },
    ],
  ],
  [
    {
      slideName: "Timeline events",
      slideUrl:
        "https://docs.github.com/en/rest/issues/timeline?apiVersion=2022-11-28",
    },
    [
      {
        id: 1,
        issueName: "List time line events for an issue",
        issueUrl:
          "https://docs.github.com/en/rest/issues/timeline?apiVersion=2022-11-28#list-timeline-events-for-an-issue",
      },
    ],
  ],
];

const IssuesPage = () => {
  return (
    <div className="issues-page-bg">
      <h1 className="header">Issues</h1>
      {gitIssuesPageData.map((eachSlide) => (
        <IssueSlide slideData={eachSlide} />
      ))}
    </div>
  );
};

export default IssuesPage;
