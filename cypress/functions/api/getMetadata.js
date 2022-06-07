/// <reference types="Cypress" />

import userData from "../../fixtures/userData.json";

export async function getMetaDataFromAPI() {
  return cy
    .request({
      method: "GET",
      url: userData.SeleniumHQGithub,
      failOnStatusCode: false,
    })
    .then((res) => {
      expect(res.status).to.eq(200);
      const repoData = res.body;
      return repoData;
    });
}

export async function totalOpenIssuesAcrossAllRepo(input) {
  const count_issue = input.reduce((a, b) => (a = a + b.open_issues_count), 0);
  cy.log("Total open issues = " + count_issue);
}

export async function SortRepoByDateUpdatedInDescendingOrder(input) {
  const sorted_array = input
    .sort((pre, curr) => new Date(curr.updated_at) - new Date(pre.updated_at))
    .map((item) => item.name);

  cy.log(
    " Sort the repositories by date updated in descending order: " +
      sorted_array.toString()
  );
}

export async function repoWithMostWatchers(input) {
  let max_watchers = input[0].watchers;
  let max_repo = input[0];
  input.forEach((item) => {
    if (item.watchers > max_watchers) {
      max_watchers = item.watchers;
      max_repo = item;
    }
  });
  cy.log(
    "Repo with highest amount of watchers = " + max_repo.name,
    "watchers amount = " + max_watchers
  );
}
