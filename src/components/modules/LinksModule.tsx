import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  eventState,
  type EventLink,
  type QuickLinkModule,
} from "../../state/eventState";
import { LinkIcon } from "../icons/LinkIcon";

interface LinksModuleProps {
  module: QuickLinkModule;
}

export function LinksModule({ module }: LinksModuleProps) {
  const [event, setEvent] = useRecoilState(eventState);
  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");

  const links = (event.moduleData?.links || []) as EventLink[];

  const addLink = () => {
    if (!newLinkTitle.trim() || !newLinkUrl.trim()) {
      alert("Please enter both title and URL");
      return;
    }

    const newLink: EventLink = {
      id: `link-${Date.now()}`,
      title: newLinkTitle,
      url: newLinkUrl,
    };

    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        links: [...links, newLink],
      },
    }));

    setNewLinkTitle("");
    setNewLinkUrl("");
  };

  const updateLink = (id: string) => {
    if (!editTitle.trim() || !editUrl.trim()) {
      alert("Please enter both title and URL");
      return;
    }

    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        links: links.map((link) =>
          link.id === id ? { ...link, title: editTitle, url: editUrl } : link,
        ),
      },
    }));

    setEditingId(null);
    setEditTitle("");
    setEditUrl("");
  };

  const deleteLink = (id: string) => {
    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        links: links.filter((link) => link.id !== id),
      },
    }));
  };

  const startEdit = (link: EventLink) => {
    setEditingId(link.id);
    setEditTitle(link.title);
    setEditUrl(link.url);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditUrl("");
  };

  return (
    <div className="glass-card module-card">
      <div className="module-header">
        <LinkIcon />
        <h4>{module.label}</h4>
      </div>

      {/* Add new link form */}
      <div className="module-form">
        <input
          type="text"
          className="text-input subtle"
          placeholder="Link title"
          value={newLinkTitle}
          onChange={(e) => setNewLinkTitle(e.target.value)}
        />
        <input
          type="url"
          className="text-input subtle"
          placeholder="Link URL (https://...)"
          value={newLinkUrl}
          onChange={(e) => setNewLinkUrl(e.target.value)}
        />
        <button className="ghost-btn small" type="button" onClick={addLink}>
          Add link
        </button>
      </div>

      {/* List of links */}
      {links.length > 0 && (
        <div className="links-list">
          {links.map((link) => (
            <div key={link.id} className="link-item">
              {editingId === link.id ? (
                <div className="link-edit">
                  <input
                    type="text"
                    className="text-input subtle"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Link title"
                  />
                  <input
                    type="url"
                    className="text-input subtle"
                    value={editUrl}
                    onChange={(e) => setEditUrl(e.target.value)}
                    placeholder="Link URL"
                  />
                  <div className="link-actions">
                    <button
                      className="ghost-btn small primary"
                      type="button"
                      onClick={() => updateLink(link.id)}
                    >
                      Save
                    </button>
                    <button
                      className="ghost-btn small"
                      type="button"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="link-display">
                  <div className="link-content">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-title"
                    >
                      {link.title}
                    </a>
                    <span className="link-url">{link.url}</span>
                  </div>
                  <div className="link-actions">
                    <button
                      className="ghost-btn small"
                      type="button"
                      onClick={() => startEdit(link)}
                    >
                      Edit
                    </button>
                    <button
                      className="ghost-btn small"
                      type="button"
                      onClick={() => deleteLink(link.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {links.length === 0 && <p className="empty-state">No links added yet</p>}
    </div>
  );
}
