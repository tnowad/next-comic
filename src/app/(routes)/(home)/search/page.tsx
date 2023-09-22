"use client";

import { Button, Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { KeyboardEvent, useEffect, useState } from "react";
import ComicList from "@/components/ComicList";
import {
  createRandomAuthorPreview,
  createRandomComicPreview,
  createRandomUserPreview,
} from "@/mocks/comics";
import { AuthorPreview, ComicPreview, GroupPreview } from "@/types/comic";
import { UserPreview } from "@/types/user";

async function getSearchedComics() {
  return Array.from({ length: 44 }).map(createRandomComicPreview);
}

async function getSearchedUsers() {
  return Array.from({ length: 44 }).map(createRandomUserPreview);
}

async function getSearchedGroups(): Promise<GroupPreview[]> {
  return [];
}

async function getSearchedAuthors() {
  return Array.from({ length: 44 }).map(createRandomAuthorPreview);
}

export default function Page() {
  const [keyword, setKeyword] = useState<string>();
  const [comics, setComics] = useState<ComicPreview[]>([]);
  const [groups, setGroups] = useState<GroupPreview[]>([]);
  const [users, setUsers] = useState<UserPreview[]>([]);
  const [authors, setAuthors] = useState<AuthorPreview[]>([]);
  const [tabSelectedKey, setTabSelectedKey] = useState<string | number>(
    "comics",
  );

  useEffect(() => { }, [keyword]);

  const fetchComics = async () => {
    const comics = await getSearchedComics();
    setComics(comics);
  };

  const fetchGroups = async () => {
    const groups = await getSearchedGroups();
    setGroups(groups);
  };

  const fetchUsers = async () => {
    const uers = await getSearchedUsers();
    setUsers(uers);
  };

  const fetchAuthors = async () => {
    const authors = await getSearchedAuthors();
    setAuthors(authors);
  };

  const handleSearch = () => { };

  const handleSearchKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <h2 className="text-3xl">Search</h2>
      <div>
        <Input
          startContent={<Icon icon="material-symbols:search" />}
          type="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Search"
          onKeyDown={handleSearchKeyDown}
        />
      </div>
      <div className="mt-2">
        <Tabs
          selectedKey={tabSelectedKey}
          onSelectionChange={(event) => setTabSelectedKey(event as string)}
        >
          <Tab key="comics" title="Comics">
            <Card>
              <CardBody>
                <ComicList comics={comics} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="groups" title="Groups">
            <Card>
              <CardBody>{groups.length}</CardBody>
            </Card>
          </Tab>
          <Tab key="users" title="Users">
            <Card>
              <CardBody>{users.length}</CardBody>
            </Card>
          </Tab>
          <Tab key="authors" title="Authors">
            <Card>
              <CardBody>{authors.length}</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
