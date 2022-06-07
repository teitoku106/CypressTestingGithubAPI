/// <reference types="Cypress" />

import * as commonFunction from "../../functions/api/getMetadata";

describe("Demo with Github API", () => {
  it("Get metadata from SeleniumHQ Repo", async () => { 
    let repoData = await commonFunction.getMetaDataFromAPI(); //Get Data from Selenium Repo using Github API
    await commonFunction.totalOpenIssuesAcrossAllRepo(repoData.body); //Count the total open issues across all Repo inside SeleniumHQ
    await commonFunction.SortRepoByDateUpdatedInDescendingOrder(repoData.body); //Sort the repositories by date updated in descending order
    await commonFunction.repoWithMostWatchers(repoData.body); //Repository has the most watchers
  });
});
