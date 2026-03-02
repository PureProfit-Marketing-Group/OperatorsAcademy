import React, { useState, useEffect, createContext, useContext } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Check, Circle, List, StickyNote, Menu, X, Search, Trash2, Plus, ChevronRight } from 'lucide-react';
import { courseData, glossaryTerms, moduleRoutes } from '../course/courseData';

const CourseContext = createContext();

export function useCourseProgress() {
  return useContext(CourseContext);
}

function ProgressBar({ current, total }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-500"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
      <span className="text-sm text-gray-400 whitespace-nowrap">{current}/{total}</span>
    </div>
  );
}

export default function CourseLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [completedSections, setCompletedSections] = useState({});
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [activeTab, setActiveTab] = useState('course');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const totalSections = Object.values(courseData).reduce((acc, m) => acc + m.sections.length, 0);
  const completedCount = Object.values(completedSections).filter(Boolean).length;

  // Determine active module from URL
  const pathSegment = location.pathname.replace('/course', '').replace(/^\//, '');
  const activeRoute = moduleRoutes.find(r => r.slug === pathSegment) || moduleRoutes[0];
  const activeModuleKey = activeRoute.key;

  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('operator-academy-notes');
      const savedProgress = localStorage.getItem('operator-academy-progress');
      if (savedNotes) setNotes(JSON.parse(savedNotes));
      if (savedProgress) setCompletedSections(JSON.parse(savedProgress));
    } catch (e) {
      console.log('Loading fresh state');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('operator-academy-progress', JSON.stringify(completedSections));
    }
  }, [completedSections, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('operator-academy-notes', JSON.stringify(notes));
    }
  }, [notes, isLoading]);

  const markComplete = (moduleKey, sectionIndex) => {
    const key = `${moduleKey}-${sectionIndex}`;
    setCompletedSections(prev => ({ ...prev, [key]: true }));
  };

  const toggleComplete = (moduleKey, sectionIndex) => {
    const key = `${moduleKey}-${sectionIndex}`;
    setCompletedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const addNote = () => {
    if (newNote.trim()) {
      const mod = courseData[activeModuleKey];
      const note = {
        id: Date.now(),
        text: newNote,
        module: mod.title,
        section: activeRoute.label,
        timestamp: new Date().toLocaleString()
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const filteredGlossary = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.category.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  // Find current module index for prev/next navigation
  const currentRouteIndex = moduleRoutes.findIndex(r => r.key === activeModuleKey);
  const prevRoute = currentRouteIndex > 0 ? moduleRoutes[currentRouteIndex - 1] : null;
  const nextRoute = currentRouteIndex < moduleRoutes.length - 1 ? moduleRoutes[currentRouteIndex + 1] : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <CourseContext.Provider value={{ completedSections, markComplete, toggleComplete }}>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-16 left-4 z-50 p-2 bg-gray-800 rounded-lg"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <div className={`fixed top-12 bottom-0 left-0 z-40 w-72 bg-gray-950 border-r border-gray-800 transform transition-transform duration-300 flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6 flex-1 overflow-y-auto">
            <Link to="/course" className="block">
              <h1 className="text-xl font-bold text-teal-400 mb-1">OPERATOR ACADEMY</h1>
              <p className="text-sm text-gray-500 mb-6">Course 1: Foundations</p>
            </Link>

            <ProgressBar current={completedCount} total={totalSections} />

            {activeTab === 'course' && (
              <nav className="mt-6 space-y-1">
                {moduleRoutes.map((route) => {
                  const module = courseData[route.key];
                  const Icon = module.icon;
                  const isActive = activeModuleKey === route.key;
                  const moduleCompleted = module.sections.every((_, sIdx) => completedSections[`${route.key}-${sIdx}`]);
                  const coursePath = route.slug ? `/course/${route.slug}` : '/course';

                  return (
                    <div key={route.key}>
                      <Link
                        to={coursePath}
                        onClick={() => setSidebarOpen(false)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${isActive ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
                      >
                        <Icon size={18} />
                        <span className="flex-1 text-sm truncate">{route.navLabel}</span>
                        {moduleCompleted && <Check size={16} className="text-teal-400 flex-shrink-0" />}
                      </Link>
                      {isActive && (
                        <div className="ml-8 mt-1 space-y-1">
                          {module.sections.map((section, sIdx) => (
                            <a
                              key={sIdx}
                              href={`#section-${sIdx}`}
                              onClick={() => setSidebarOpen(false)}
                              className="w-full flex items-center gap-2 px-2 py-1 rounded text-left text-xs transition-colors text-gray-500 hover:text-gray-300"
                            >
                              {completedSections[`${route.key}-${sIdx}`] ? (
                                <Check size={12} className="text-teal-400 flex-shrink-0" />
                              ) : (
                                <Circle size={12} className="flex-shrink-0" />
                              )}
                              <span className="truncate">{section.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            )}

            {activeTab === 'glossary' && (
              <div className="mt-6">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="space-y-2">
                  {filteredGlossary.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-teal-400 text-sm">{item.term}</h4>
                          <p className="text-gray-400 text-xs mt-1">{item.definition}</p>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 bg-gray-700 rounded-full text-gray-400 whitespace-nowrap flex-shrink-0">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="mt-6">
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add a note..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:border-teal-500 resize-none"
                    rows={2}
                  />
                  <button
                    onClick={addNote}
                    disabled={!newNote.trim()}
                    className="mt-2 flex items-center gap-1 px-3 py-1.5 bg-teal-600 rounded-lg text-xs hover:bg-teal-500 disabled:bg-gray-700 disabled:text-gray-500 transition-colors"
                  >
                    <Plus size={14} />
                    Add Note
                  </button>
                </div>
                {notes.length === 0 ? (
                  <p className="text-center text-gray-500 text-sm py-8">No notes yet</p>
                ) : (
                  <div className="space-y-2">
                    {notes.map(note => (
                      <div key={note.id} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-200 text-sm whitespace-pre-wrap break-words">{note.text}</p>
                            <p className="text-[10px] text-gray-500 mt-1 truncate">{note.module} &bull; {note.timestamp}</p>
                          </div>
                          <button
                            onClick={() => deleteNote(note.id)}
                            className="p-1 text-gray-500 hover:text-red-400 rounded transition-colors flex-shrink-0"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom tabs */}
          <div className="p-4 border-t border-gray-800 bg-gray-950">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('course')}
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs transition-colors ${activeTab === 'course' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
              >
                <BookOpen size={14} />
                Course
              </button>
              <button
                onClick={() => setActiveTab('glossary')}
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs transition-colors ${activeTab === 'glossary' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
              >
                <List size={14} />
                Glossary
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs transition-colors ${activeTab === 'notes' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
              >
                <StickyNote size={14} />
                Notes{notes.length > 0 && ` (${notes.length})`}
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:ml-72">
          <div className="max-w-4xl mx-auto p-6 lg:p-8 pb-24">
            <div className="pt-8 lg:pt-0">
              <Outlet />
            </div>

            {/* Prev / Next module navigation */}
            <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-800">
              {prevRoute ? (
                <Link
                  to={prevRoute.slug ? `/course/${prevRoute.slug}` : '/course'}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight size={20} className="rotate-180" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Previous</div>
                    <div className="text-sm">{prevRoute.navLabel}</div>
                  </div>
                </Link>
              ) : <div />}
              {nextRoute ? (
                <Link
                  to={nextRoute.slug ? `/course/${nextRoute.slug}` : '/course'}
                  className="flex items-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors"
                >
                  <div className="text-right">
                    <div className="text-xs text-teal-200">Next</div>
                    <div className="text-sm">{nextRoute.navLabel}</div>
                  </div>
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <div className="px-4 py-3 bg-gray-800 text-gray-400 rounded-lg">
                  Course Complete!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </CourseContext.Provider>
  );
}
